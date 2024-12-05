import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HistoricalEvent } from '../types/timeline';
import { useLanguage } from '../contexts/LanguageContext';
import { calculateCurrentYear } from '../utils/timelineUtils';

interface TimelineLineProps {
  events: HistoricalEvent[];
  startYear: number;
  endYear: number;
  onEventClick?: (event: HistoricalEvent) => void;
  onYearChange?: (year: number) => void;
}

export const TimelineLine: React.FC<TimelineLineProps> = ({
  events,
  startYear,
  endYear,
  onEventClick,
  onYearChange,
}) => {
  const { t } = useLanguage();
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sortedEvents = [...events].sort((a, b) => b.date - a.date);
  const totalDuration = Math.abs(endYear - startYear);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const timelineBottom = timelineRect.bottom;
      
      // Only update when timeline is in view
      if (timelineTop > viewportHeight || timelineBottom < 0) return;
      
      // Calculate progress based on timeline position relative to viewport center
      const viewportCenter = viewportHeight / 2;
      const timelineCenterOffset = timelineTop + (timelineHeight / 2);
      const distanceFromCenter = viewportCenter - timelineCenterOffset;
      const maxDistance = timelineHeight / 2;
      
      // Calculate progress (0 to 1)
      let progress = 0.5 + (distanceFromCenter / timelineHeight);
      progress = Math.max(0, Math.min(1, progress));
      
      // Calculate and update current year
      const currentYear = calculateCurrentYear(startYear, endYear, progress);
      if (currentYear !== undefined) {
        onYearChange?.(currentYear);
      }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, [startYear, endYear, onYearChange]);

  const calculatePosition = (date: number): number => {
    const position = ((Math.abs(startYear - date)) / totalDuration) * 90 + 5;
    return Math.min(Math.max(position, 5), 95);
  };

  return (
    <div className="relative h-full" ref={timelineRef}>
      <div className="absolute left-1/2 top-[5%] bottom-[5%] w-0.5 bg-white/20" />
      
      {sortedEvents.map((event, index) => {
        const position = calculatePosition(event.date);
        const isLeft = index % 2 === 0;
        const isHovered = hoveredEventId === event.id;
        
        return (
          <motion.div
            key={event.id}
            className="absolute left-0 right-0 group"
            style={{ 
              top: `${position}%`,
              zIndex: isHovered ? 50 : 10
            }}
            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.button
                className={`w-3 h-3 rounded-full bg-white shadow-glow transition-all duration-200
                          ${isHovered ? 'scale-150' : 'group-hover:scale-150'}`}
                onMouseEnter={() => setHoveredEventId(event.id)}
                onMouseLeave={() => setHoveredEventId(null)}
                onClick={() => onEventClick?.(event)}
              />
            </div>

            <div 
              className={`absolute top-1/2 -translate-y-1/2 ${
                isLeft ? 'right-[52%] pr-4 text-right' : 'left-[52%] pl-4'
              }`}
            >
              <motion.div
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-3 cursor-pointer
                          transition-all duration-200
                          ${isHovered ? 'bg-white/20 scale-105' : 'hover:bg-white/20 hover:scale-105'}`}
                onMouseEnter={() => setHoveredEventId(event.id)}
                onMouseLeave={() => setHoveredEventId(null)}
                onClick={() => onEventClick?.(event)}
                style={{
                  zIndex: isHovered ? 50 : 10
                }}
              >
                <h3 className="text-white font-bold text-sm">
                  {t(event.title)}
                </h3>
                <p className="text-white/60 text-xs mt-1">
                  {Math.abs(event.date)} {event.date < 0 ? 'BCE' : 'CE'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};