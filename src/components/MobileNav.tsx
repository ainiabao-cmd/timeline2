import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { TimeIndicator } from './TimeIndicator';
import { AchievementsPanel } from './AchievementsPanel';
import { EventFilter } from './EventFilter';
import { Achievement, HistoricalEvent } from '../types/timeline';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentYear: number;
  achievements: Achievement[];
  selectedCategories: HistoricalEvent['category'][];
  onCategoryToggle: (category: HistoricalEvent['category']) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  currentYear,
  achievements,
  selectedCategories,
  onCategoryToggle,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 20 }}
          className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md md:hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="h-full overflow-y-auto py-16 px-4">
            <div className="mb-8">
              <TimeIndicator currentYear={currentYear} />
            </div>

            <div className="mb-8">
              <EventFilter
                selectedCategories={selectedCategories}
                onCategoryToggle={onCategoryToggle}
                className="relative left-0 top-0"
              />
            </div>

            <div className="mt-8">
              <AchievementsPanel
                achievements={achievements}
                visible={true}
                isMobile={true}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};