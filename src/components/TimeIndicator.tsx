import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatYear } from '../utils/timelineUtils';

interface TimeIndicatorProps {
  currentYear: number;
}

export const TimeIndicator: React.FC<TimeIndicatorProps> = ({ currentYear }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentYear]);

  return (
    <motion.div
      className="fixed left-8 bottom-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}

    >
      <motion.div
      
        className="relative flex items-center justify-center text-3xl font-bold bg-white/10 backdrop-blur-md rounded-lg p-3 
                   border border-white/20 shadow-xl text-white"
        animate={{
          scale: isAnimating ? 1.1 : 1,
          textShadow: isAnimating ? "0 0 8px rgba(255,255,255,0.8)" : "none"
        }}
        style={{height: '50px'}}
      >
        {formatYear(currentYear)}
      </motion.div>
    </motion.div>
  );
};