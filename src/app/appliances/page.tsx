'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { RootState } from '@/redux/store';
import { setAppliances, setLoading } from '@/redux/store';

// Mock data for development
const MOCK_APPLIANCES = [
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    category: 'Kitchen',
    image: '/images/refrigerator.png',
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    category: 'Laundry',
    image: '/images/washing-machine.png',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    category: 'Kitchen',
    image: '/images/dishwasher.png',
  },
  {
    id: 'oven',
    name: 'Oven',
    category: 'Kitchen',
    image: '/images/oven.png',
  },
  {
    id: 'dryer',
    name: 'Dryer',
    category: 'Laundry',
    image: '/images/dryer.png',
  },
  {
    id: 'microwave',
    name: 'Microwave',
    category: 'Kitchen',
    image: '/images/microwave.png',
  },
];

export default function AppliancesPage() {
  const dispatch = useDispatch();
  const { appliances, loading } = useSelector((state: RootState) => state.appliances);
  
  // Simulate API fetch with mock data
  useEffect(() => {
    dispatch(setLoading(true));
    
    // Simulate API delay
    const timer = setTimeout(() => {
      dispatch(setAppliances(MOCK_APPLIANCES));
      dispatch(setLoading(false));
    }, 500);
    
    return () => clearTimeout(timer);
  }, [dispatch]);
  
  // Group appliances by category
  // Group appliances by category - with null check
const appliancesByCategory = appliances && appliances.length > 0 
? appliances.reduce((acc: any, appliance: any) => {
    if (!acc[appliance.category]) {
      acc[appliance.category] = [];
    }
    acc[appliance.category].push(appliance);
    return acc;
  }, {})
: {};
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Appliances</h1>
      <p className="text-gray-600 mb-8">
        Select an appliance to find troubleshooting guides and repair tutorials.
      </p>
      
      {/* Search bar */}
      <div className="mb-8">
        <div className="max-w-2xl relative">
          <input
            type="text"
            placeholder="Search for an appliance..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <div className="space-y-10">
          {Object.entries(appliancesByCategory).map(([category, categoryAppliances]: [string, any]) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category} Appliances</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryAppliances.map((appliance: any) => (
                  <Link 
                    href={`/appliances/${appliance.id}`}
                    key={appliance.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative h-48 w-full bg-gray-100">
                      <Image
                        src={appliance.image}
                        alt={appliance.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{appliance.name}</h3>
                      <p className="text-gray-500">{appliance.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}