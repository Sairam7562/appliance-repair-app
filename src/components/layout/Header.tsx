'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaWrench, FaUser, FaQuestion } from 'react-icons/fa';

const Header: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <header className="bg-primary-600 text-white shadow-md" style={{backgroundColor: '#0284c7'}}>
  <div className="container mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center gap-2">
        <FaWrench className="text-white" />
        <span>ApplianceRepair</span>
      </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`hover:text-primary-200 transition ${pathname === '/' ? 'text-primary-200 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/appliances" 
              className={`hover:text-primary-200 transition ${pathname?.startsWith('/appliances') ? 'text-primary-200 font-semibold' : ''}`}
            >
              Appliances
            </Link>
            <Link 
              href="/troubleshooting" 
              className={`hover:text-primary-200 transition ${pathname?.startsWith('/troubleshooting') ? 'text-primary-200 font-semibold' : ''}`}
            >
              Troubleshooting
            </Link>
            <Link 
              href="/videos" 
              className={`hover:text-primary-200 transition ${pathname?.startsWith('/videos') ? 'text-primary-200 font-semibold' : ''}`}
            >
              Videos
            </Link>
            <Link 
              href="/technicians" 
              className={`hover:text-primary-200 transition ${pathname?.startsWith('/technicians') ? 'text-primary-200 font-semibold' : ''}`}
            >
              Find Help
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/help" 
              className="text-white hover:text-primary-200 transition"
              aria-label="Help"
            >
              <FaQuestion className="text-xl" />
            </Link>
            <Link 
              href="/login" 
              className="text-white hover:text-primary-200 transition"
              aria-label="User account"
            >
              <FaUser className="text-xl" />
            </Link>
            
            <button className="bg-primary-600 text-white hover:bg-primary-700" style={{backgroundColor: '#0284c7'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;