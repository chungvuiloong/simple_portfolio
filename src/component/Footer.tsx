import SocialMediaTab from './SocialMediaTab';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    socialIcons: [
        { name: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebook },
        { name: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
        { name: 'Twitter', href: 'https://twitter.com/', icon: FaTwitter },
    ]
}


  
  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {navigation.socialIcons.map((socialIcon, index) => (
                <SocialMediaTab key={index} {...socialIcon} />
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }