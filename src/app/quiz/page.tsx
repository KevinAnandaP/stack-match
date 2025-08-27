'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    points: Record<string, number>;
  }[];
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const handleAnswer = (answer: { text: string; points: Record<string, number> }) => {
    // Update scores
    const newScores = { ...scores };
    Object.entries(answer.points).forEach(([tech, points]) => {
      newScores[tech] = (newScores[tech] || 0) + (points as number);
    });
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final result
      const winner = Object.entries(newScores).reduce(
        (a, b) => (a[1] > b[1] ? a : b)
      )[0];
      
      // Navigate to result page with the winning tech stack
      router.push(`/result?tech=${winner}`);
    }
  };

  if (loading) {
    return (
      <PageTransition className="w-full h-screen bg-[#1c1a5e] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="text-xl text-white">Loading quiz...</div>
        </div>
      </PageTransition>
    );
  }

  if (!questions.length) {
    return (
      <PageTransition className="w-full h-screen bg-[#1c1a5e] flex items-center justify-center">
        <div className="text-xl text-white">No questions available</div>
      </PageTransition>
    );
  }

  const question = questions[currentQuestion];

  return (
    <PageTransition className="w-full h-screen bg-[#1c1a5e] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-[914px] flex flex-col items-start gap-[152px]"
        >
          {/* Question Header */}
          <div className="flex flex-col items-start gap-10 w-full">
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="w-full text-center text-white/60 font-semibold text-xl tracking-normal leading-normal"
            >
              Question {currentQuestion + 1} out of {questions.length}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-full text-center text-white font-semibold text-4xl tracking-normal leading-normal"
            >
              {question.question}
            </motion.div>
          </div>

          {/* Answer Options */}
          <div className="flex flex-col items-end gap-10 w-full">
            {question.answers.map((answer, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                onClick={() => handleAnswer(answer)}
                className="w-full bg-white rounded-[20px] flex items-center justify-center py-4 px-8 hover:bg-[#f8f9fa] hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer min-h-[60px] border border-transparent hover:border-[#e9ecef]"
              >
                <span className="text-[#0e0d2f] font-semibold text-xl tracking-normal leading-normal text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {answer.text}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </PageTransition>
  );
}
