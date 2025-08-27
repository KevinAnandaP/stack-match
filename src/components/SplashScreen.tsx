'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#1c1a5e] flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl font-bold text-white mb-4">
            Stack Match
          </h1>
          <p className="text-xl text-white/80">
            Find the tech stack that matches you
          </p>
        </motion.div>

        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 mb-4">
            <motion.div
              className="bg-white rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/60 text-sm">Loading... {progress}%</p>
        </div>

        {/* Animated tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { src: '/react.png', alt: 'React' },
            { src: '/python.png', alt: 'Python' },
            { src: '/java.png', alt: 'Java' },
            { src: '/rust.svg', alt: 'Rust' },
            { src: '/nodejs.png', alt: 'Node.js' },
            { src: '/golang.svg', alt: 'Go' },
          ].map((tech, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <Image
                src={tech.src}
                alt={tech.alt}
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
