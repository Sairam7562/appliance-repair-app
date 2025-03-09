'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaTools, FaExclamationTriangle } from 'react-icons/fa';

// Mock data for troubleshooting guides
const GUIDES_DATA = [
  {
    id: 'refrigerator-not-cooling',
    title: 'Refrigerator Not Cooling Properly',
    appliance: 'refrigerator',
    applianceName: 'Refrigerator',
    difficulty: 'medium',
    timeRequired: '30-60 min',
    views: 15420,
    thumbnail: 'https://via.placeholder.com/400x300?text=Refrigerator+Not+Cooling',
  },
  {
    id: 'washing-machine-not-draining',
    title: 'Washing Machine Won\'t Drain',
    appliance: 'washing-machine',
    applianceName: 'Washing Machine',
    difficulty: 'medium',
    timeRequired: '45-60 min',
    views: 12350,
    thumbnail: 'https://via.placeholder.com/400x300?text=Washing+Machine+Drain',
  },
  {
    id: 'dishwasher-not-cleaning',
    title: 'Dishwasher Not Cleaning Dishes Properly',
    appliance: 'dishwasher',
    applianceName: 'Dishwasher',
    difficulty: 'easy',
    timeRequired: '15-30 min',
    views: 9870,
    thumbnail: 'https://via.placeholder.com/400x300?text=Dishwasher+Cleaning',
  },
  {
    id: 'oven-not-heating',
    title: 'Oven Not Heating Up',
    appliance: 'oven',
    applianceName: 'Oven',
    difficulty: 'medium',
    timeRequired: '30-45 min',
    views: 8930,
    thumbnail: 'https://via.placeholder.com/400x300?text=Oven+Not+Heating',
  },
  {
    id: 'dryer-not-heating',
    title: 'Clothes Dryer Not Heating',
    appliance: 'dryer',
    applianceName: 'Dryer',
    difficulty: 'medium',
    timeRequired: '30-60 min',
    views: 11240,
    thumbnail: 'https://via.placeholder.com/400x300?text=Dryer+Not+Heating',
  },
  {
    id: 'microwave-not-turning-on',
    title: 'Microwave Won\'t Turn On',
    appliance: 'microwave',
    applianceName: 'Microwave',
    difficulty: 'hard',
    timeRequired: '45-60 min',
    views: 7650,
    thumbnail: 'https://via.placeholder.com/400x300?text=Microwave+Not+Working',
  },
];

export default function TroubleshootingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppliance, setSelectedAppliance] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  
  // Filter guides based on search and filters
  const filteredGuides = GUIDES_DATA.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.applianceName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAppliance = selectedAppliance === '' || guide.appliance === selectedAppliance;
    const matchesDifficulty = selectedDifficulty === '' || guide.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesAppliance && matchesDifficulty;
  });
  
  // Get unique appliance types for filter
  const applianceTypes = Array.from(new Set(GUIDES_DATA.map(guide => guide.appliance)));
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Appliance Troubleshooting Guides</h1>
      <p className="text-gray-600 mb-8">
        Step-by-step instructions to diagnose and fix common problems with your home appliances.
      </p>
      
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a problem or appliance..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Appliance
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedAppliance}
              onChange={(e) => setSelectedAppliance(e.target.value)}
            >
              <option value="">All Appliances</option>
              {applianceTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Difficulty
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Guides grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.length > 0 ? (
          filteredGuides.map(guide => (
            <Link
              href={`/troubleshooting/${guide.appliance}/${guide.id}`}
              key={guide.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={guide.thumbnail}
                  alt={guide.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{guide.applianceName}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className={`text-sm font-medium ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
                  </span>
                </div>
                
                <h2 className="text-lg font-semibold mb-2">{guide.title}</h2>
                
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <FaTools className="mr-1" />
                  <span className="mr-3">{guide.timeRequired}</span>
                  <FaExclamationTriangle className="mr-1" />
                  <span>{guide.views.toLocaleString()} views</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No guides found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedAppliance('');
                setSelectedDifficulty('');
              }}
              className="text-primary-600 font-medium hover:text-primary-700"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}