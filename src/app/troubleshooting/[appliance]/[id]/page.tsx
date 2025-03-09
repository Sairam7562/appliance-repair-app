'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaTools, FaVideo, FaExclamationTriangle, FaCheck, FaUserCog } from 'react-icons/fa';

// Mock data for specific guides
const GUIDE_DATA = {
  'refrigerator-not-cooling': {
    title: 'How to Fix a Refrigerator That\'s Not Cooling',
    appliance: 'refrigerator',
    applianceName: 'Refrigerator',
    difficulty: 'medium',
    timeRequired: '30-60 min',
    toolsRequired: ['Screwdriver', 'Multimeter', 'Cleaning brush', 'Vacuum cleaner'],
    safetyNotes: [
      'Always unplug the refrigerator before working on internal components',
      'Be careful when handling sharp components',
      'If you smell gas or hear hissing, stop immediately and call a professional'
    ],
    overview: 'A refrigerator that isn\'t cooling properly is usually caused by issues with the condenser coils, evaporator fan, or defrost system. This guide will walk you through the common causes and solutions to get your refrigerator cooling correctly again.',
    steps: [
      {
        title: 'Check if the refrigerator is receiving power',
        description: 'Make sure the refrigerator is plugged in and the circuit breaker hasn\'t tripped. Check if the interior light turns on when you open the door.',
        image: 'https://via.placeholder.com/600x400?text=Check+Power',
        tips: ['If the light doesn\'t work, check the power outlet with another appliance'],
      },
      {
        title: 'Verify temperature settings',
        description: 'Ensure the temperature controls aren\'t set too high. The recommended refrigerator temperature is between 35-38°F (1.7-3.3°C).',
        image: 'https://via.placeholder.com/600x400?text=Temperature+Settings',
        tips: ['Allow 24 hours for temperature changes to take effect'],
      },
      {
        title: 'Clean the condenser coils',
        description: 'Dirty condenser coils can prevent your refrigerator from cooling properly. Locate the coils (usually at the back or underneath the fridge), unplug the refrigerator, and clean the coils using a vacuum cleaner with a brush attachment.',
        image: 'https://via.placeholder.com/600x400?text=Clean+Condenser+Coils',
        tips: [
          'Coils should be cleaned every 6 months',
          'For bottom-mounted coils, you may need to remove the front grille'
        ],
      },
      {
        title: 'Check the condenser fan',
        description: 'The condenser fan circulates air over the coils. If it\'s not working, the refrigerator won\'t cool properly. Unplug the refrigerator, locate the fan (near the coils), and check if it spins freely. Remove any debris blocking the fan.',
        image: 'https://via.placeholder.com/600x400?text=Condenser+Fan',
        tips: ['If the fan doesn\'t spin freely or is noisy, it may need replacement'],
      },
      {
        title: 'Inspect the evaporator fan',
        description: 'The evaporator fan circulates cold air inside the refrigerator. Unplug the refrigerator and access the evaporator fan (usually in the freezer section) to check if it\'s running properly.',
        image: 'https://via.placeholder.com/600x400?text=Evaporator+Fan',
        tips: ['Listen for unusual noises which may indicate a failing fan motor'],
      },
      {
        title: 'Check for airflow issues',
        description: 'Make sure there are no items blocking air vents inside the refrigerator. Overloading can restrict airflow and prevent proper cooling.',
        image: 'https://via.placeholder.com/600x400?text=Airflow+Check',
        tips: ['Leave some space between items to allow air circulation'],
      },
    ],
    conclusion: 'If you\'ve followed all these steps and your refrigerator still isn\'t cooling properly, the issue may be with the compressor, a refrigerant leak, or the control board. These problems typically require professional repair.',
    relatedGuides: [
      'refrigerator-making-noise',
      'refrigerator-leaking-water',
      'refrigerator-freezer-frost',
    ],
  },
  'washing-machine-not-draining': {
    title: 'How to Fix a Washing Machine That Won\'t Drain',
    appliance: 'washing-machine',
    applianceName: 'Washing Machine',
    difficulty: 'medium',
    timeRequired: '45-60 min',
    toolsRequired: ['Screwdriver', 'Pliers', 'Towels', 'Bucket'],
    safetyNotes: [
      'Always unplug the washing machine before working on it',
      'Have towels ready to catch water',
      'Be careful with sharp edges'
    ],
    overview: 'A washing machine that won\'t drain is typically caused by a clogged drain pump, blocked drain hose, or a malfunctioning pump. This guide will help you diagnose and fix the problem.',
    steps: [
      {
        title: 'Cancel the cycle and power off',
        description: 'Cancel the current wash cycle and unplug the washing machine for safety.',
        image: 'https://via.placeholder.com/600x400?text=Power+Off',
        tips: ['If possible, run a spin cycle first to try to drain remaining water'],
      },
      {
        title: 'Drain excess water manually',
        description: 'If your machine has a drain hose or filter access, carefully open it and drain water into a bucket or pan. Some front-loading machines have an access panel at the bottom front.',
        image: 'https://via.placeholder.com/600x400?text=Manual+Drain',
        tips: [
          'Have plenty of towels ready',
          'Drain water slowly to avoid spills'
        ],
      },
      {
        title: 'Clean the drain pump filter',
        description: 'Locate and remove the drain pump filter (usually behind a small door at the bottom front of the machine). Clean out any debris like coins, buttons, or build-up.',
        image: 'https://via.placeholder.com/600x400?text=Clean+Pump+Filter',
        tips: ['Take a photo before removing parts to help with reassembly'],
      },
      {
        title: 'Check the drain hose',
        description: 'Inspect the drain hose for kinks, bends, or blockages. Disconnect it from the wall and machine if needed, and run water through it to clear any clogs.',
        image: 'https://via.placeholder.com/600x400?text=Check+Drain+Hose',
        tips: ['Make sure the drain hose isn\'t inserted too far into the standpipe'],
      },
      {
        title: 'Inspect the drain pump',
        description: 'If accessible, check the drain pump for obstructions or damage. Listen for unusual sounds when the pump should be running, which might indicate a mechanical problem.',
        image: 'https://via.placeholder.com/600x400?text=Inspect+Pump',
        tips: ['A humming sound might indicate the pump is trying to run but is jammed'],
      },
      {
        title: 'Test the machine',
        description: 'Reassemble everything, plug the machine back in, and run a drain or spin cycle to test if the problem is resolved.',
        image: 'https://via.placeholder.com/600x400?text=Test+Machine',
        tips: ['Start with a small amount of water for testing'],
      },
    ],
    conclusion: 'If your washing machine still won\'t drain after trying these steps, the issue might be a faulty drain pump that needs replacement, a problem with the control board, or a clogged main drain line. These issues typically require professional repair.',
    relatedGuides: [
      'washing-machine-loud-spinning',
      'washing-machine-leaking',
      'washing-machine-not-spinning',
    ],
  },
};

export default function GuideDetailPage({ params }: { params: { appliance: string, id: string } }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const guideDetail = GUIDE_DATA[params.id as keyof typeof GUIDE_DATA];
      
      if (guideDetail) {
        setGuide(guideDetail);
        setError(null);
      } else {
        setError('Guide not found');
      }
      
      setLoading(false);
    }, 300);
  }, [params.id]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (error || !guide) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-2">Guide Not Found</h2>
          <p className="text-red-600 mb-4">We couldn't find the troubleshooting guide you're looking for.</p>
          <Link href="/troubleshooting" className="text-primary-600 font-medium hover:text-primary-700">
            ← Back to All Guides
          </Link>
        </div>
      </div>
    );
  }
  
  const handleNextStep = () => {
    if (currentStep < guide.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/troubleshooting" 
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
      >
        <FaArrowLeft className="mr-2" /> Back to All Guides
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-primary-700 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{guide.title}</h1>
          
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-white/20 rounded-full px-3 py-1">
              {guide.applianceName}
            </span>
            <span className="bg-white/20 rounded-full px-3 py-1">
              Difficulty: {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
            </span>
            <span className="bg-white/20 rounded-full px-3 py-1">
              Time: {guide.timeRequired}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-700">{guide.overview}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <FaTools className="text-primary-600 mr-2" /> Tools Required
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {guide.toolsRequired.map((tool: string, index: number) => (
                <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <FaCheck className="text-green-500 mr-2" /> {tool}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <FaExclamationTriangle className="text-yellow-500 mr-2" /> Safety Notes
            </h2>
            <ul className="space-y-2">
              {guide.safetyNotes.map((note: string, index: number) => (
                <li key={index} className="flex items-start text-gray-700">
                  <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1 flex-shrink-0" /> 
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Step-by-step instructions */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="bg-primary-50 p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Step {currentStep + 1} of {guide.steps.length}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 0}
                className={`p-2 rounded-lg ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-100'}`}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextStep}
                disabled={currentStep === guide.steps.length - 1}
                className={`p-2 rounded-lg ${currentStep === guide.steps.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary-600 hover:bg-primary-100'}`}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{guide.steps[currentStep].title}</h3>
          
          <div className="mb-6 relative h-64 md:h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={guide.steps[currentStep].image}
              alt={guide.steps[currentStep].title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{guide.steps[currentStep].description}</p>
          </div>
          
          {guide.steps[currentStep].tips && guide.steps[currentStep].tips.length > 0 && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Tips:</h4>
              <ul className="space-y-1">
                {guide.steps[currentStep].tips.map((tip: string, index: number) => (
                  <li key={index} className="text-blue-700 flex items-start">
                    <span className="mr-2">•</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <button
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className={`w-full sm:w-auto mb-3 sm:mb-0 px-6 py-3 rounded-lg font-medium ${
                currentStep === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-secondary-600 text-white hover:bg-secondary-700'
              } transition flex items-center justify-center`}
            >
              <FaArrowLeft className="mr-2" /> Previous Step
            </button>
            
            {currentStep < guide.steps.length - 1 ? (
              <button
                onClick={handleNextStep}
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition flex items-center justify-center"
              >
                Next Step <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <Link
                href={`/technicians?appliance=${guide.appliance}`}
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition flex items-center justify-center"
              >
                <FaUserCog className="mr-2" /> Find a Professional
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Conclusion */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
          <p className="text-gray-700 mb-6">{guide.conclusion}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/videos/${guide.appliance}/${params.id}`}
              className="px-6 py-3 rounded-lg font-medium bg-secondary-600 text-white hover:bg-secondary-700 transition flex items-center justify-center"
            >
              <FaVideo className="mr-2" /> Watch Video Tutorial
            </Link>
            <Link 
              href={`/technicians?appliance=${guide.appliance}`}
              className="px-6 py-3 rounded-lg font-medium bg-primary-600 text-white hover:bg-primary-700 transition flex items-center justify-center"
            >
              <FaUserCog className="mr-2" /> Find a Professional
            </Link>
          </div>
        </div>
      </div>
      
      {/* Related guides */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Related Guides</h2>
          <ul className="space-y-2">
            {guide.relatedGuides.map((relatedGuideId: string) => (
              <li key={relatedGuideId} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <Link 
                  href={`/troubleshooting/${guide.appliance}/${relatedGuideId}`}
                  className="text-primary-600 hover:text-primary-700 hover:underline flex items-center"
                >
                  <FaTools className="mr-2 text-gray-500" />
                  {relatedGuideId.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}