'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaTools, FaVideo, FaExclamationTriangle } from 'react-icons/fa';

// Mock data for appliance details
const applianceData = {
  refrigerator: {
    name: 'Refrigerator',
    description: 'Modern refrigerators with cooling and freezing compartments for food preservation.',
    image: '/images/refrigerator.png',
    commonProblems: [
      { id: 'not-cooling', title: 'Not Cooling Properly', severity: 'high' },
      { id: 'making-noise', title: 'Making Strange Noises', severity: 'medium' },
      { id: 'leaking-water', title: 'Leaking Water', severity: 'medium' },
      { id: 'freezer-frost', title: 'Excessive Frost in Freezer', severity: 'low' },
      { id: 'temperature-fluctuations', title: 'Temperature Fluctuations', severity: 'medium' },
    ],
    maintenanceTips: [
      'Clean condenser coils every 6 months',
      'Check and clean door seals regularly',
      'Keep the refrigerator level',
      'Set proper temperature (35-38°F for refrigerator, 0°F for freezer)',
      'Replace water filters as recommended'
    ]
  },
  'washing-machine': {
    name: 'Washing Machine',
    description: 'Automatic clothes washing machines for home laundry needs.',
    image: '/images/washing-machine.png',
    commonProblems: [
      { id: 'not-draining', title: 'Not Draining Properly', severity: 'high' },
      { id: 'loud-spinning', title: 'Loud During Spin Cycle', severity: 'medium' },
      { id: 'leaking', title: 'Leaking Water', severity: 'high' },
      { id: 'not-spinning', title: 'Not Spinning', severity: 'high' },
      { id: 'door-wont-lock', title: 'Door Won\'t Lock', severity: 'medium' },
    ],
    maintenanceTips: [
      'Clean the filter monthly',
      'Leave the door open after use to prevent mold',
      'Use the right amount of detergent',
      'Run a cleaning cycle monthly',
      'Check hoses for cracks or leaks regularly'
    ]
  },
  // Add data for other appliances similarly
};

export default function ApplianceDetailPage({ params }: { params: { id: string } }) {
  const [appliance, setAppliance] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const applianceDetail = applianceData[params.id as keyof typeof applianceData];
      
      if (applianceDetail) {
        setAppliance(applianceDetail);
        setError(null);
      } else {
        setError('Appliance not found');
      }
      
      setLoading(false);
    }, 500);
  }, [params.id]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error || !appliance) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Appliance Not Found</h2>
          <p className="text-red-600 mb-4">We couldn't find the appliance you're looking for.</p>
          <Link href="/appliances" className="text-primary-600 font-medium hover:text-primary-700">
            ← Back to All Appliances
          </Link>
        </div>
      </div>
    );
  }
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/appliances" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to All Appliances
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
            <div className="relative h-64 w-full">
              <Image
                src={appliance.image}
                alt={appliance.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{appliance.name}</h1>
            <p className="text-gray-600 mb-6">{appliance.description}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FaExclamationTriangle className="text-yellow-500 mr-2" /> Common Problems
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {appliance.commonProblems.map((problem: any) => (
                  <Link 
                    key={problem.id}
                    href={`/troubleshooting/${params.id}/${problem.id}`}
                    className={`border rounded-lg p-4 flex items-center hover:shadow-md transition ${getSeverityColor(problem.severity)}`}
                  >
                    <span className="font-medium">{problem.title}</span>
                    <span className="ml-auto text-sm">
                      Fix →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FaTools className="text-primary-600 mr-2" /> Maintenance Tips
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {appliance.maintenanceTips.map((tip: string, index: number) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/troubleshooting/${params.id}`}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition inline-flex items-center justify-center"
            >
              <FaTools className="mr-2" /> View All Troubleshooting Guides
            </Link>
            <Link 
              href={`/videos/${params.id}`}
              className="bg-secondary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-800 transition inline-flex items-center justify-center"
            >
              <FaVideo className="mr-2" /> Watch Video Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}