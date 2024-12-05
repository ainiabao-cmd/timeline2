import React from 'react';
import { motion } from 'framer-motion';
import { Kingdom, HistoricalEvent } from '../types/timeline';
import { TimelineLine } from './TimelineLine';
import { useLanguage } from '../contexts/LanguageContext';
import { calculateTimelineHeight, getDynastyDuration } from '../utils/timelineUtils';

interface ParallelTimelinesProps {
  kingdoms: Kingdom[];
  startYear: number;
  endYear: number;
  onEventClick?: (event: HistoricalEvent) => void;
  onYearChange?: (year: number) => void;
}

export const ParallelTimelines: React.FC<ParallelTimelinesProps> = ({
  kingdoms,
  startYear,
  endYear,
  onEventClick,
  onYearChange,
}) => {
  const { t } = useLanguage();
  const duration = Math.abs(endYear - startYear);
  const timelineHeight = calculateTimelineHeight(duration);

  const calculateTimelinePosition = (kingdom: Kingdom) => {
    const start = ((Math.abs(startYear - kingdom.period.start)) / duration) * 90 + 5;
    const kingdomDuration = getDynastyDuration(kingdom);
    const height = (kingdomDuration / duration) * 90;
    
    return {
      top: `${start}%`,
      height: `${height}%`
    };
  };

  return (
    <div 
      className="grid h-full" 
      style={{ 
        gridTemplateColumns: `repeat(${kingdoms.length}, 1fr)`,
        gap: '2rem',
        height: `${timelineHeight}px`
      }}
    >
      {kingdoms.map((kingdom, index) => {
        const timelinePosition = calculateTimelinePosition(kingdom);
        
        return (
          <motion.div
            key={kingdom.id}
            className="relative h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white">{t(kingdom.name)}</h3>
              <p className="text-xs text-white/60">
                {Math.abs(kingdom.period.start)} BCE - {Math.abs(kingdom.period.end)} BCE
              </p>
            </div>

            <div className="relative h-full">
              <div 
                className="absolute w-full"
                style={timelinePosition}
              >
                <TimelineLine
                  events={kingdom.events}
                  startYear={kingdom.period.start}
                  endYear={kingdom.period.end}
                  onEventClick={onEventClick}
                  onYearChange={onYearChange}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};