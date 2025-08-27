'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Result {
  id: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  techStack: string[];
  logoUrl: string;
}

export default function ResultContent() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const tech = searchParams.get('tech');

  useEffect(() => {
    if (tech) {
      fetchResult(tech);
    } else {
      router.push('/');
    }
  }, [tech, router]);

  const fetchResult = async (techId: string) => {
    try {
      const response = await fetch('/api/results');
      const data = await response.json();
      const foundResult = data.find((r: Result) => r.id === techId);
      
      if (foundResult) {
        setResult(foundResult);
      } else {
        // Fallback to first result if tech not found
        setResult(data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching result:', error);
      setLoading(false);
    }
  };

  const handleRestart = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="w-full h-screen bg-[#1c1a5e] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="text-xl text-white">Loading results...</div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="w-full h-screen bg-[#1c1a5e] flex items-center justify-center">
        <div className="text-xl text-white">Result not found</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#1c1a5e] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0">
        <Image
          src="/vector-atas.png"
          alt="Vector decoration"
          width={420}
          height={280}
          className="opacity-20"
        />
      </div>
      
      <div className="absolute bottom-0 left-0">
        <Image
          src="/vector-bawah.png"
          alt="Vector decoration"
          width={420}
          height={280}
          className="opacity-20"
        />
      </div>

      {/* Main Result Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 30px 60px rgba(139, 92, 246, 0.4)"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-[20px] overflow-hidden shadow-2xl border border-white/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/10 before:to-blue-400/10 before:opacity-100"
      >
        {/* Tech Stack Logo */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-lg rounded-full p-[10px] inline-flex items-center justify-center gap-[10px] border border-white/30 shadow-lg">
          <div className="w-20 h-20 rounded-full flex items-center justify-center relative z-10">
            {/* Display actual tech stack logo based on result ID */}
            {result.id === 'react' && (
              <Image src="/react.png" alt="React" width={60} height={60} className="object-contain" />
            )}
            {result.id === 'nodejs' && (
              <Image src="/nodejs.png" alt="Node.js" width={60} height={60} className="object-contain" />
            )}
            {result.id === 'python' && (
              <Image src="/python.png" alt="Python" width={60} height={60} className="object-contain" />
            )}
            {result.id === 'go' && (
              <Image src="/golang.svg" alt="Go" width={60} height={60} className="object-contain" />
            )}
            {result.id === 'java' && (
              <Image src="/java.png" alt="Java" width={60} height={60} className="object-contain" />
            )}
            {result.id === 'rust' && (
              <Image src="/rust.svg" alt="Rust" width={60} height={60} className="object-contain" />
            )}
            {/* Fallback for other tech stacks */}
            {!['react', 'nodejs', 'python', 'go', 'java', 'rust'].includes(result.id) && (
              <span className="text-2xl font-bold text-gray-600">{result.name.charAt(0)}</span>
            )}
          </div>
        </div>

        {/* Result Title */}
        <div className="absolute top-[180px] left-0 right-0 text-[#1c1a5e] font-semibold text-3xl tracking-normal leading-normal text-center px-8">
          {result.title}
        </div>

        {/* Result Description */}
        <div className="absolute top-[240px] left-8 right-8 text-[#1c1a5e99] font-normal text-lg tracking-normal leading-normal text-center">
          {result.description}
        </div>

        {/* Traits Section */}
        <div className="absolute top-[350px] left-8 right-8">
          <h3 className="text-base font-semibold text-[#1c1a5e] mb-3 text-center">Your characteristics:</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {result.traits.map((trait, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="absolute top-[440px] left-8 right-8">
          <h3 className="text-base font-semibold text-[#1c1a5e] mb-3 text-center">Recommended tech stack:</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {result.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Restart Button */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={handleRestart}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#1c1a5e]/90 to-[#1c1a5e]/80 backdrop-blur-lg border border-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-400/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
          >
            <span className="relative z-10">Try Again</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
