import React from 'react';
import Link from 'next/link';
import { FaWrench, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center gap-2 mb-4">
              <FaWrench className="text-primary-400" />
              <span>ApplianceRepair</span>
            </Link>
            <p className="text-secondary-300 mb-4">
              Your trusted guide to fixing appliances at home. Follow our step-by-step guides
              or connect with qualified technicians.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-secondary-300 hover:text-primary-400 transition">Home</Link></li>
              <li><Link href="/appliances" className="text-secondary-300 hover:text-primary-400 transition">Appliances</Link></li>
              <li><Link href="/troubleshooting" className="text-secondary-300 hover:text-primary-400 transition">Troubleshooting</Link></li>
              <li><Link href="/videos" className="text-secondary-300 hover:text-primary-400 transition">Videos</Link></li>
              <li><Link href="/technicians" className="text-secondary-300 hover:text-primary-400 transition">Find Help</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Appliances</h3>
            <ul className="space-y-2">
              <li><Link href="/appliances/refrigerators" className="text-secondary-300 hover:text-primary-400 transition">Refrigerators</Link></li>
              <li><Link href="/appliances/washing-machines" className="text-secondary-300 hover:text-primary-400 transition">Washing Machines</Link></li>
              <li><Link href="/appliances/dishwashers" className="text-secondary-300 hover:text-primary-400 transition">Dishwashers</Link></li>
              <li><Link href="/appliances/ovens" className="text-secondary-300 hover:text-primary-400 transition">Ovens</Link></li>
              <li><Link href="/appliances/dryers" className="text-secondary-300 hover:text-primary-400 transition">Dryers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-secondary-300 hover:text-primary-400 transition">Help Center</Link></li>
              <li><Link href="/contact" className="text-secondary-300 hover:text-primary-400 transition">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-secondary-300 hover:text-primary-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-secondary-300 hover:text-primary-400 transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} ApplianceRepair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;