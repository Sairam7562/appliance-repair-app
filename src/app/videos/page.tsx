'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaPlayCircle, FaEye, FaClock } from 'react-icons/fa';

// Mock data for video tutorials
const VIDEOS_DATA = [
  {
    id: 'refrigerator-not-cooling-vid',
    title: 'How to Fix a Refrigerator That\'s Not Cooling',
    appliance: 'refrigerator',
    applianceName: 'Refrigerator',
    duration: '8:45',
    views: 254870,
    thumbnail: 'https://via.placeholder.com/640x360?text=Refrigerator+Not+Cooling',
    youtubeId: 'dQw4w9WgXcQ', // This is just a placeholder - replace with real YouTube ID
    description: 'In this video, we show you step-by-step how to diagnose and fix a refrigerator that isn\'t cooling properly, including checking condenser coils, fans, and temperature settings.',
  },
  {
    id: 'washing-machine-drain-vid',
    title: 'Fix a Washing Machine That Won\'t Drain',
    appliance: 'washing-machine',
    applianceName: 'Washing Machine',
    duration: '12:32',
    views: 187653,
    thumbnail: 'https://via.placeholder.com/640x360?text=Washing+Machine+Drain',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'Learn how to fix a washing machine that won\'t drain. We cover common causes like clogged filters, blocked drain hoses, and failing drain pumps.',
  },
  {
    id: 'dishwasher-cleaning-vid',
    title: 'Make Your Dishwasher Clean Better',
    appliance: 'dishwasher',
    applianceName: 'Dishwasher',
    duration: '6:18',
    views: 134952,
    thumbnail: 'https://via.placeholder.com/640x360?text=Dishwasher+Cleaning',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'If your dishwasher isn\'t cleaning dishes properly, this video will help you identify the problem and fix it yourself, saving money on repair calls.',
  },
  {
    id: 'oven-heating-vid',
    title: 'Oven Not Heating Up? Here\'s How to Fix It',
    appliance: 'oven',
    applianceName: 'Oven',
    duration: '10:15',
    views: 97458,
    thumbnail: 'https://via.placeholder.com/640x360?text=Oven+Heating+Issues',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'In this comprehensive guide, we show you how to diagnose and repair an oven that isn\'t heating up properly, including checking heating elements and temperature sensors.',
  },
  {
    id: 'dryer-not-heating-vid',
    title: 'Fix a Dryer That\'s Not Heating',
    appliance: 'dryer',
    applianceName: 'Clothes Dryer',
    duration: '14:27',
    views: 208741,
    thumbnail: 'https://via.placeholder.com/640x360?text=Dryer+Not+Heating',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'In this detailed tutorial, we walk through the most common causes of a dryer not heating and show you exactly how to fix each problem.',
  },
  {
    id: 'microwave-not-working-vid',
    title: 'Microwave Troubleshooting Guide',
    appliance: 'microwave',
    applianceName: 'Microwave',
    duration: '7:53',
    views: 76329,
    thumbnail: 'https://via.placeholder.com/640x360?text=Microwave+Troubleshooting',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'Learn how to diagnose and solve common microwave problems in this easy-to-follow video guide for all major microwave brands.',
  },
];

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAppliance, setSelectedAppliance] = useState('');
  
  // Filter videos based on search and filters
  const filteredVideos = VIDEOS_DATA.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAppliance = selectedAppliance === '' || video.appliance === selectedAppliance;
    
    return matchesSearch && matchesAppliance;
  });
  
  // Get unique appliance types for filter
  const applianceTypes = Array.from(new Set(VIDEOS_DATA.map(video => video.appliance)));
  
  const formatViewCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Video Repair Tutorials</h1>
      <p className="text-gray-600 mb-8">
        Watch detailed video tutorials on how to diagnose and fix common appliance problems.
      </p>
      
      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a video tutorial..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div>
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
      </div>
      
      {/* Videos grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => (
            <Link
              href={`/videos/${video.id}`}
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative">
                <div className="relative h-48 w-full bg-gray-800">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                    <FaPlayCircle className="text-white text-5xl opacity-90 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-200" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-500">{video.applianceName}</span>
                </div>
                
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors duration-200">{video.title}</h2>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                
                <div className="flex items-center text-xs text-gray-500">
                  <FaEye className="mr-1" />
                  <span className="mr-3">{formatViewCount(video.views)} views</span>
                  <FaClock className="mr-1" />
                  <span>{video.duration}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-2">No videos found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedAppliance('');
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