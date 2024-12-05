import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Dynasty } from '../types/timeline';
import { formatYear } from '../utils/timelineUtils';

interface DynamicTitleProps {
  currentDynasty: Dynasty | null;
  startYear?: number;
  endYear?: number;
}

export const DynamicTitle: React.FC<DynamicTitleProps> = ({
  currentDynasty,
  startYear,
  endYear,
}) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentDynasty?.id || 'no-dynasty'}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl font-bold text-white mb-2"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {currentDynasty ? t(currentDynasty.name) : ''}
        </motion.h1>
        {startYear && endYear && (
          <motion.p 
            className="text-lg text-white/80"
            style={{
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {formatYear(startYear)} - {formatYear(endYear)}
          </motion.p>
        )}
      </motion.div>
    </AnimatePresence>
  );
};