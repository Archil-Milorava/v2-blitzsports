import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-8 md:px-14 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Logo and Social Media */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">BLITZ</h1>
          <p className="text-gray-300">BLITZ sports გაწვდით საინეტერესო და უნიკალურ სტატიებს და ისტორიებს.</p>
          
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-3">გამოგვყევი</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579099388081" target='_blank' className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram className="text-2xl" />
              </a> */}
              {/* <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaTiktok className="text-2xl" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">კატეგორიები</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">ფეხბურთი</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">კალათბურთი</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">MMA</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">ფორმულა 1</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">სხვა</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        {/* <div className="space-y-4">
          <h3 className="text-lg font-semibold">სასარგებლო ბმულები</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">ჩვენ შესახებ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">კონტაქტი</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">რეკლამა</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">პარტნიორები</a></li>
            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">ჟურნალისტებისთვის</a></li>
          </ul>
        </div> */}
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
        <p>© 2024-2025 ყველა უფლება დაცულია | BLITZ Sports Media</p>
        {/* <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="hover:text-primary transition-colors">წესები და პირობები</a>
          <a href="#" className="hover:text-primary transition-colors">კონფიდენციალურობის პოლიტიკა</a>
          <a href="#" className="hover:text-primary transition-colors">ფაილი Cookie-ები</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;