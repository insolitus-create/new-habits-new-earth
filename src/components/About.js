import React from 'react';
import { Globe, Users, Clock, FileText, DollarSign, Info, Leaf, ArrowLeft } from 'lucide-react';

const AboutProject = ({ goBack }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-4 relative">

      <div className="w-full max-w-md relative mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 border-green-600 relative z-10">
          <h1 className="text-2xl font-bold text-green-700 flex items-center justify-center">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <Info className="text-green-700" size={24} />
            </div>
            About the Project
          </h1>
        </div>
      </div>

      {/* Project Title Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-6 transform transition-all hover:scale-102 border-t border-green-200">
        <div className="flex items-start">
          <div className="bg-green-600 p-3 rounded-lg mr-4">
            <Globe className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-800 mb-2">
              New Habits, New Earth
            </h2>
            <p className="text-green-700 italic">I live in the spirit of less waste</p>
            <div className="h-1 w-16 bg-green-600 my-3 rounded-full"></div>
            <p className="text-gray-700">
              <span className="font-semibold">Erasmus+ Key Action 2:</span><br />
              KA210 Small-scale Partnerships
            </p>
          </div>
        </div>
      </div>

      {/* Duration Card */}
      <div className="w-full max-w-md bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-md p-5 mb-6 border border-green-100">
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            <Clock className="text-green-600" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-1">Project Duration</h2>
            <p className="text-gray-800 font-medium">18 months (2023-2025)</p>
          </div>
        </div>
      </div>

      {/* Priority Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-green-700 mb-4 pb-2 border-b border-green-100">Horizontal Priority</h2>
        <div className="flex items-center bg-green-50 p-3 rounded-lg">
          <Leaf className="text-green-600 mr-3" size={18} />
          <p className="text-gray-800 font-semibold">Environment and the fight against climate change</p>
        </div>
      </div>

      {/* Partners Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-green-700">Partner Organizations</h2>
          <div className="bg-blue-50 p-2 rounded-full">
            <Users className="text-blue-600" size={20} />
          </div>
        </div>
        
        <ul className="space-y-4">
          <li className="flex items-start p-3 hover:bg-green-50 rounded-md transition-colors">
            <div className="min-w-4 h-4 bg-green-600 rounded-full mt-1.5 mr-3"></div>
            <div>
              <p className="font-semibold text-green-800">Zespół Szkół im. Jana Kilińskiego</p>
              <p className="text-gray-600">
                Krapkowice, Poland 
                <span className="ml-1 text-base" aria-label="Flag of Poland">🇵🇱</span>
              </p>
              <a 
                href="https://lo.krapkowice.pl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm inline-flex items-center mt-1"
              >
                lo.krapkowice.pl
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </li>
          <li className="flex items-start p-3 hover:bg-green-50 rounded-md transition-colors">
            <div className="min-w-4 h-4 bg-green-600 rounded-full mt-1.5 mr-3"></div>
            <div>
              <p className="font-semibold text-green-800">"Sv.Kliment Ohridski" High School</p>
              <p className="text-gray-600">
                North Macedonia 
                <span className="ml-1 text-base" aria-label="Flag of North Macedonia">🇲🇰</span>
              </p>
              <a 
                href="http://gimnazijaohrid.edu.mk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm inline-flex items-center mt-1"
              >
                gimnazijaohrid.edu.mk
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </li>
          <li className="flex items-start p-3 hover:bg-green-50 rounded-md transition-colors">
            <div className="min-w-4 h-4 bg-green-600 rounded-full mt-1.5 mr-3"></div>
            <div>
              <p className="font-semibold text-green-800">IIS MICHELE GIUA - CAGLIARI</p>
              <p className="text-gray-600">
                Italy 
                <span className="ml-1 text-base" aria-label="Flag of Italy">🇮🇹</span>
              </p>
              <a 
                href="http://www.giua.edu.it" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm inline-flex items-center mt-1"
              >
                giua.edu.it
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </li>
          <li className="flex items-start p-3 hover:bg-green-50 rounded-md transition-colors">
            <div className="min-w-4 h-4 bg-green-600 rounded-full mt-1.5 mr-3"></div>
            <div>
              <p className="font-semibold text-green-800">Fundacja Insolitus</p>
              <p className="text-gray-600">
                Poland 
                <span className="ml-1 text-base" aria-label="Flag of Poland">🇵🇱</span>
              </p>
              <a 
                href="https://fundacjainsolitus.pl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm inline-flex items-center mt-1"
              >
                fundacjainsolitus.pl
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>

      {/* Project Number Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5 mb-6 border-blue-400">
        <div className="flex items-center">
          <div className="bg-blue-50 p-3 rounded-lg mr-4">
            <FileText className="text-blue-600" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-1">Project Number</h2>
            <p className="text-gray-800 font-mono tracking-tight">2023-1-PL01-KA210-SCH-000153924</p>
          </div>
        </div>
      </div>

      {/* Funding Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="p-2.5 bg-blue-100 rounded-full mr-3">
            <DollarSign className="text-blue-700" size={18} />
          </div>
          <h2 className="text-xl font-bold text-blue-700">Funding</h2>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            This project is funded by the <span className="font-semibold text-blue-700">European Union</span>. 
            The views and opinions expressed are those of the author(s) only and do not necessarily reflect 
            those of the European Union or the National Agency (NA). Neither the European Union nor NA can 
            be held responsible for them.
          </p>
        </div>
      </div>

      {/* Licensing Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
        <h2 className="text-xl font-bold text-green-700 mb-3">Licensing</h2>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="text-gray-700">
            This work is licensed under a <span className="font-semibold">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)</span>.
          </p>
        </div>
      </div>
      
      {/* Bottom back button */}
      <button 
        onClick={goBack}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-4 mb-2 flex items-center justify-center text-green-700 hover:bg-green-50 transition-colors"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Main Menu
      </button>
    </div>
  );
};

export default AboutProject;