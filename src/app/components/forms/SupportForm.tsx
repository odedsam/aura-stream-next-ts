'use client';

import { useState } from 'react';
import { Input } from '@/app/components/ui/Input';
import { Button } from '@/app/components/ui/Buttons';
import { toast } from '@/lib/toast';
import CountrySelector from '@/app/components/ui/CountrySelector';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!agreedToTerms) {
      toast.warning('Please agree to the Terms of Use and Privacy Policy');
      return;
    }

    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter((field) => !formData[field as keyof FormData]);

    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    const toastId = toast.loading('Sending your message...');
    setTimeout(() => {
      toast.success('Message sent successfully!', { id: toastId });
    }, 1000);

    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-sec p-6 lg:p-8 rounded-lg">
      <div className="space-y-6">
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={(value) => handleInputChange('firstName', value)}
            required
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={(value) => handleInputChange('lastName', value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
            prefix={<CountrySelector />}
            required
          />
        </div>

        <Input
          label="Message"
          type="textarea"
          placeholder="Enter your Message"
          value={formData.message}
          onChange={(value) => handleInputChange('message', value)}
          required
        />

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 accent-black bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-red-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-def leading-relaxed">
            I agree with <span className="text-gray-400 underline cursor-pointer">Terms of Use</span> and{' '}
            <span className="text-gray-400 underline cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        <Button type="button" onClick={handleSubmit} variant="red" full>
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default SupportForm;
