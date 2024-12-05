import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoricalEvent } from '../types/timeline';
import { formatYear } from '../utils/timelineUtils';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { DynastyTheme } from '../styles/dynastyThemes';

interface EventModalProps {
  event: HistoricalEvent | null;
  theme: DynastyTheme;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, theme, onClose }) => {
  const { t } = useLanguage();
  
  if (!event) return null;

  const getCategoryLabel = (category: HistoricalEvent['category']): { chinese: string; english: string } => {
    const labels = {
      political: { chinese: '政治', english: 'Political' },
      cultural: { chinese: '文化', english: 'Cultural' },
      military: { chinese: '军事', english: 'Military' },
      economic: { chinese: '经济', english: 'Economic' },
      scientific: { chinese: '科学', english: 'Scientific' }
    };
    return labels[category];
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full mx-4 border-l-4"
          style={{ borderColor: theme.accent }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1" style={{ color: theme.text }}>
                {t(event.title)}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {event.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img
                src={event.image.url}
                alt={t(event.image.caption)}
                className="w-full h-64 object-cover"
              />
              <p className="text-sm text-white/60 mt-2 text-center">
                {t(event.image.caption)}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/60">
                {t({ chinese: '日期', english: 'Date' })}
              </span>
              <span className="text-white font-semibold">{formatYear(event.date)}</span>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-white/90 leading-relaxed">
                {t(event.description)}
              </p>
            </div>

            {event.location && (
              <div className="flex items-center justify-between">
                <span className="text-white/60">
                  {t({ chinese: '地点', english: 'Location' })}
                </span>
                <span className="text-white">{event.location}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-white/60">
                {t({ chinese: '类别', english: 'Category' })}
              </span>
              <span className="text-white">
                {t(getCategoryLabel(event.category))}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white/60">
                {t({ chinese: '历史意义', english: 'Historical Significance' })}
              </span>
              <div className="flex">
                {Array.from({ length: event.importance }).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};