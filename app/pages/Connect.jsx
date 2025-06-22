"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TbMail, TbBrandLinkedin, TbBrandGithub, TbBrandTwitter, TbDownload } from 'react-icons/tb';

export default function Connect() {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div id='contact' className="relative min-h-screen bg-gradient-to-b from-[#0c1120] to-[#0a0f1a] text-gray-100 py-24 px-6 overflow-hidden">
      {/* Background with seamless transition */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1a2b]/70 via-[#0c1120] to-[#0a0f1a]"></div>
      
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7 + 0.1,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-1/5 w-80 h-80 bg-purple-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            Let's Connect
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-200 mb-6"
          >
            Get in Touch
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Always up for new opportunities, collabs, or idea exchanges. Reach out through any of these channels and I'll get back to you ASAP!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="bg-cyan-900/30 p-3 rounded-lg mr-4">
                <TbMail className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <a href="mailto:karamjeetsony8449@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              karamjeetsony8449@gmail.com
            </a>
          </motion.div>
          
          {/* LinkedIn */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-900/30 p-3 rounded-lg mr-4">
                <TbBrandLinkedin className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">LinkedIn</h3>
            </div>
            <a href="https://linkedin.com/in/karamjeet-sony" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
              @karamjeet
            </a>
          </motion.div>
          
          {/* GitHub */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-900/30 p-3 rounded-lg mr-4">
                <TbBrandGithub className="text-purple-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">GitHub</h3>
            </div>
            <a href="https://github.com/Aayush4532" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors">
              @karamjeet11
            </a>
          </motion.div>
          
          {/* Twitter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#1a2433]/80 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 shadow-xl hover:shadow-sky-500/20 hover:border-sky-400/30 transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="bg-sky-900/30 p-3 rounded-lg mr-4">
                <TbBrandTwitter className="text-sky-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Twitter</h3>
            </div>
            <a href="https://twitter.com/karamjeet11" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-sky-200 transition-colors">
              @karamjeet11
            </a>
          </motion.div>
        </div>
        
        {/* Resume Download */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="/Karamjeet-Sony-resume.pdf" 
            download
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <TbDownload className="mr-2" />
            Download my resume
          </a>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-gray-700/30 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2025 Karamjeet Sony. All rights reserved.
          </div>
          <div className="text-gray-500 text-sm">
            {currentDate}
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}