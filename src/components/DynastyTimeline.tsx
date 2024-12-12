import React from 'react';
import { Dynasty, Kingdom, HistoricalEvent } from '../types/timeline';
import { TimelineLine } from './TimelineLine';
import { ParallelTimelines } from './ParallelTimelines';
import { calculateTimelineHeight, getDynastyDuration } from '../utils/timelineUtils';

interface DynastyTimelineProps {
  dynasty: Dynasty;
  kingdoms?: Kingdom[];
  selectedCategories: HistoricalEvent['category'][];
  onEventClick?: (event: HistoricalEvent) => void;
  onYearChange?: (year: number) => void;
}

export const DynastyTimeline: React.FC<DynastyTimelineProps> = ({
  dynasty,
  kingdoms,
  onEventClick,
  onYearChange,
  selectedCategories
}) => {
  const duration = getDynastyDuration(dynasty);
  const timelineHeight = calculateTimelineHeight(duration);

  return (
    <div className="relative w-full" style={{ height: `${timelineHeight}px` }}>
      {kingdoms && kingdoms.length > 0 ? (
        <ParallelTimelines
          kingdoms={kingdoms}
          startYear={dynasty.period.start}
          endYear={dynasty.period.end}
          onEventClick={onEventClick}
          onYearChange={onYearChange}
          selectedCategories={selectedCategories}
        />
      ) : (
        <TimelineLine
          events={dynasty.notableEvents}
          startYear={dynasty.period.start}
          endYear={dynasty.period.end}
          onEventClick={onEventClick}
          onYearChange={onYearChange}
          selectedCategories={selectedCategories}
          
        />
      )}
    </div>
  );
};