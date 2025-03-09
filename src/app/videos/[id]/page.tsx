'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaThumbsUp, FaEye, FaClock, FaTools, FaShare } from 'react-icons/fa';

// Mock data for videos
const VIDEOS_DATA = {
  'refrigerator-not-cooling-vid': {
    id: 'refrigerator-not-cooling-vid',
    title: 'How to Fix a Refrigerator That\'s Not Cooling',
    appliance: 'refrigerator',
    applianceName: 'Refrigerator',
    duration: '8:45',
    views: 254870,
    likes: 15420,
    youtubeId: 'dQw4w9WgXcQ', // This is just a placeholder - replace with real YouTube ID
    description: 'In this video, we show you step-by-step how to diagnose and fix a refrigerator that isn\'t cooling properly. We cover the most common issues including dirty condenser coils, faulty evaporator fans, and problematic temperature controls. Follow along as we demonstrate proper troubleshooting techniques that will save you time and money.\n\nTimestamps:\n0:00 Introduction\n1:15 Checking power and settings\n2:30 Cleaning condenser coils\n4:15 Inspecting fans\n6:20 Airflow issues\n7:40 When to call a professional',
    relatedProblemId: 'refrigerator-not-cooling',
    uploadDate: '2023-07-15',
  },
  'washing-machine-drain-vid': {
    id: 'washing-machine-drain-vid',
    title: 'Fix a Washing Machine That Won\'t Drain',
    appliance: 'washing-machine',
    applianceName: 'Washing Machine',
    duration: '12:32',
    views: 187653,
    likes: 9876,
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'Learn how to fix a washing machine that won\'t drain. We cover common causes like clogged filters, blocked drain hoses, and failing drain pumps. This comprehensive guide includes step-by-step instructions for both front-loading and top-loading washing machines.\n\nTimestamps:\n0:00 Introduction\n1:30 Safety first - power off\n2:45 Accessing and cleaning the drain filter\n5:10 Checking the drain hose\n8:20 Inspecting the drain pump\n10:15 Testing your repair',
    relatedProblemId: 'washing-machine-not-draining',
    uploadDate: '2023-05-22',
  },
  'dishwasher-cleaning-vid': {
    id: 'dishwasher-cleaning-vid',
    title: 'Make Your Dishwasher Clean Better',
    appliance: 'dishwasher',
    applianceName: 'Dishwasher',
    duration: '6:18',
    views: 134952,
    likes: 7821,
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
    description: 'If your dishwasher isn\'t cleaning dishes properly, this video will help you identify the problem and fix it yourself. We show you how to check and clean spray arms, filters, and water inlet screens, as well as how to optimize loading patterns for best cleaning results.\n\nTimestamps:\n0:00 Introduction\n0:45 Common causes of poor cleaning\n1:30 Cleaning the filter system\n2:50 Checking and clearing spray arms\n4:10 Water inlet problems\n5:30 Proper loading techniques',
    relatedProblemId: 'dishwasher-not-cleaning',
    uploadDate: '2023-08-03',
  },
  // Add additional videos similarly
};

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const videoDetail = VIDEOS_DATA[params.id as keyof typeof VIDEOS_DATA];
      
      if (videoDetail) {
        setVideo(videoDetail);
        setError(null);
      } else {
        setError('Video not found');
      }
      
      setLoading(false);
    }, 300);
  }, [params.id]);
  
  const formatViewCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error || !video) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Video Not Found</h2>
          <p className="text-red-600 mb-4">We couldn't find the video tutorial you're looking for.</p>
          <Link href="/videos" className="text-primary-600 font-medium hover:text-primary-700">
            ← Back to All Videos
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/videos" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to All Videos
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{video.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="flex items-center">
              <FaEye className="mr-1" />
              {formatViewCount(video.views)} views
            </span>
            <span className="flex items-center">
              <FaThumbsUp className="mr-1" />
              {formatViewCount(video.likes)} likes
            </span>
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {video.duration}
            </span>
            <span>
              Uploaded: {video.uploadDate}
            </span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{video.description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/troubleshooting/${video.appliance}/${video.relatedProblemId}`}
              className="px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition flex items-center justify-center"
            >
              <FaTools className="mr-2" /> View Step-by-Step Guide
            </Link>
            <button 
              className="px-6 py-3 rounded-lg font-medium bg-secondary-600 text-white hover:bg-secondary-700 transition flex items-center justify-center"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
            >
              <FaShare className="mr-2" /> Share Video
            </button>
          </div>
        </div>
      </div>
      
      {/* Related videos section could go here */}
    </div>
  );
}