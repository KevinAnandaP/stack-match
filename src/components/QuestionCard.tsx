import { motion } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    points: Record<string, number>;
  }[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: { text: string; points: Record<string, number> }) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          {question.question}
        </h2>
        
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(answer)}
              className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-all duration-200"
            >
              <span className="text-lg text-gray-700">{answer.text}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
