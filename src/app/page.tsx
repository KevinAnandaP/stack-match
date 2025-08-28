'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import PageTransition from '@/components/PageTransition';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }
  
  return (
    <PageTransition>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen bg-[#1c1a5e] overflow-hidden"
      >
        {/* Floating Particles */}
        <FloatingParticles count={30} />

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0">
          <Image
            src="/vector-atas.png"
            alt="Vector decoration"
            width={420}
            height={280}
            className="opacity-20 w-[280px] h-[180px] md:w-[420px] md:h-[280px]"
          />
        </div>
        
        <div className="absolute bottom-0 left-0">
          <Image
            src="/vector-bawah.png"
            alt="Vector decoration"
            width={420}
            height={280}
            className="opacity-20 w-[280px] h-[180px] md:w-[420px] md:h-[280px]"
          />
        </div>

        {/* Main content */}
        <div className="absolute top-[100px] sm:top-[120px] md:top-[120px] left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="flex flex-col items-center gap-3 md:gap-5 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-normal">
              Stack Match
            </h1>
            
            <p className="text-lg md:text-2xl font-normal text-white max-w-3xl leading-normal px-4">
              Curious about which tech stack matches your coding style?
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>Take the quiz and find out!
            </p>
          </div>
        </div>

        {/* Tech stack logos grid */}
        <div className="absolute top-[270px] sm:top-[300px] md:top-[380px] left-1/2 transform -translate-x-1/2 px-4">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8 max-w-[320px] sm:max-w-md md:max-w-4xl mx-auto">
            {/* Row 1 */}
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/react.png"
                alt="React"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/python.png"
                alt="Python"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/rust.svg"
                alt="Rust"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/java.png"
                alt="Java"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/golang.svg"
                alt="Go"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="w-[96px] h-[85px] sm:w-[120px] sm:h-[100px] md:w-[180px] md:h-[160px] bg-gradient-to-br from-white/20 to-white/10 rounded-[14px] sm:rounded-[16px] md:rounded-[24px] flex items-center justify-center shadow-lg backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/30 hover:to-white/20 transition-all cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <Image
                src="/nodejs.png"
                alt="Node.js"
                width={70}
                height={70}
                className="object-contain relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-[70px] md:h-[70px]"
              />
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-[120px] sm:bottom-[140px] md:bottom-[100px] left-1/2 transform -translate-x-1/2 px-4">
          <Link href="/quiz">
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 20px 50px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-[16px] md:rounded-[20px] px-12 md:px-20 py-4 md:py-5 inline-flex items-center justify-center cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <span className="text-xl md:text-2xl font-semibold text-white text-center relative z-10">
                Start Quiz
              </span>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </PageTransition>
  );
}
