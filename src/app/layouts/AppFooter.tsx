import { footerData, socialLinks, legalLinks } from '@/config';
import Link from 'next/link';

const AppFooter = () => {
  return (
    <footer className="text-white bg-sec">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="hidden gap-8 md:grid md:grid-cols-6">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="mb-6 text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-4">
                <div className="flex text-white border-b border-red-def rounded-md" />

                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="transition-colors text-gray-def hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-colors border rounded-lg bg-quaternary hover:bg-gray-700 border-quinary"
                  aria-label={social.name}>
                  <img src={social.icon} alt={social.name} className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:hidden">
          <div className="space-y-8">
            {[footerData[0], footerData[2], footerData[4]].map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="transition-colors text-gray-def hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {[footerData[1], footerData[3]].map((section, index) => (
              <div key={index}>
                <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="transition-colors text-gray-def hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 transition-colors rounded-lg content-block-gray hover:bg-gray-600"
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
      <div className="border-t border-quinary font-manrope">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-xs text-gray-200">
              This site uses information from{' '}
              <a
                href="https://www.imdb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary">
                IMDb
              </a>{' '}
              for educational & entertainment purposes only.
             <strong className="ml-2 text-white text-center">Built by Oded</strong>

            </p>

            <div className="flex flex-wrap justify-center space-x-6 text-sm md:justify-end">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="transition-colors text-gray-def hover:text-white">
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
