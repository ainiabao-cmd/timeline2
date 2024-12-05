import React from 'react';
import { motion } from 'framer-motion';
import { HistoricalEvent } from '../types/timeline';
import { formatYear } from '../utils/timelineUtils';

interface EventCardProps {
  event: HistoricalEvent;
  delay?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, delay = 0 }) => {
  const categoryColors = {
    political: 'bg-blue-500',
    cultural: 'bg-purple-500',
    military: 'bg-red-500',
    economic: 'bg-green-500',
    technological: 'bg-yellow-500',
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
    >
      <div className={`${categoryColors[event.category]} h-2`} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">
            {event.title.chinese}
            <span className="block text-sm text-white/80">
              {event.title.english}
            </span>
          </h3>
          <span className="text-white/60 text-sm">
            {formatYear(event.date)}
          </span>
        </div>
        <p className="text-white/80">
          {event.description}
        </p>
        {event.location && (
          <p className="mt-2 text-white/60 text-sm">
            Location: {event.location}
          </p>
        )}
      </div>
    </motion.div>
  );
};