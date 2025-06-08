import { footerData, socialLinks, legalLinks } from '@/config';
import Link from 'next/link';
import Image from 'next/image';

const AppFooter = () => {
  return (
    <footer className="bg-sec text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="hidden md:grid md:grid-cols-6 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-def hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-quaternary rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors border border-quinary"
                  aria-label={social.name}>
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="md:hidden grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {[footerData[0], footerData[2], footerData[4]].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-def hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {[footerData[1], footerData[3]].map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-def hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect With Us */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 content-block-gray rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                    aria-label={social.name}>
                    <img src={social.icon} className="w-5 h-5 " alt={social.name} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-quinary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-def text-sm">©2023 streamvib, All Rights Reserved</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-def hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
