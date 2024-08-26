import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <a href="#" className="block text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Products</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Contact Me</a>
        </div>
        <div className="space-y-2">
          <a href="#" className="block text-gray-600 hover:text-gray-900">My Credentials</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Terms of Service</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Disclosures</a>
        </div>
        <div className="space-y-2">
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <FaFacebookF className="mr-2" /> Let’s connect on Facebook
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <FaLinkedinIn className="mr-2" /> Let’s connect on LinkedIn
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <FaInstagram className="mr-2" /> Stay in touch on Instagram
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <AiOutlineTwitter className="mr-2" /> Let’s connect on X
          </a>
          <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
            <FaTiktok className="mr-2" /> Follow me on TikTok
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © Dr. Akan Ido 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
