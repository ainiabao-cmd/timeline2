import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-full p-3
                 hover:bg-white/20 transition-colors duration-200 z-50
                 flex items-center gap-2 text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
    >
      <Languages className="w-5 h-5" />
      <span className="text-sm font-medium">
        {language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
      </span>
    </motion.button>
  );
};