"use client";

import  { useState } from 'react';

interface CustomInputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  prefix?: React.ReactNode;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// Reusable Input Component
const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  prefix = null
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center z-10">
            {prefix}
          </div>
        )}
        {type === 'textarea' ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            rows={4}
            className={`w-full px-4 py-3 bg-primary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none ${className}`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            className={`w-full px-4 py-3 ${prefix ? 'pl-20' : ''} bg-primary border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors ${className}`}
          />
        )}
      </div>
    </div>
  );
};

// Phone Number Prefix Component
const PhonePrefix: React.FC = () => (
  <div className="flex items-center space-x-2 px-2 py-1 bg-gray-700 rounded border-r border-gray-600">
    <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-white to-orange-500 rounded-sm"></div>
    <span className="text-white text-sm">+91</span>
  </div>
);

const SupportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!agreedToTerms) {
      alert('Please agree to the Terms of Use and Privacy Policy');
      return;
    }

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof FormData]);

    if (missingFields.length > 0) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Form submitted:', formData);
    // Here you can add your form submission logic
  };

  return (
    <div className="w-full max-w-md mx-auto bg-sec p-6 lg:p-8 rounded-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-white">Welcome to our support page!</h2>
        <p className="text-gray-400 text-sm">
          We're here to help you with any problems you may be having with our product.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CustomInput
            label="First Name"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={(value) => handleInputChange('firstName', value)}
            required
          />
          <CustomInput
            label="Last Name"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={(value) => handleInputChange('lastName', value)}
            required
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            required
          />
          <CustomInput
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
            prefix={<PhonePrefix />}
            required
          />
        </div>

        {/* Message */}
        <CustomInput
          label="Message"
          type="textarea"
          placeholder="Enter your Message"
          value={formData.message}
          onChange={(value) => handleInputChange('message', value)}
          required
        />

        {/* Terms Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-red-600"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
            I agree with <span className="text-white underline cursor-pointer">Terms of Use</span> and{' '}
            <span className="text-white underline cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SupportForm;
