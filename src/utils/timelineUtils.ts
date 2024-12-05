import { Dynasty, HistoricalEvent } from '../types/timeline';

export const formatYear = (year: number): string => {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  return `${year} CE`;
};

export const getDynastyDuration = (dynasty: Dynasty): number => {
  return Math.abs(dynasty.period.end - dynasty.period.start);
};

export const calculateTimelineHeight = (duration: number): number => {
  // Base height of 600px for dynasties lasting 100 years or less
  const baseHeight = 600;
  // Additional height per 100 years beyond the base
  const heightPerCentury = 200;
  // Calculate additional height based on duration
  const additionalHeight = Math.max(0, duration - 100) / 100 * heightPerCentury;
  
  return baseHeight + additionalHeight;
};

export const calculateCurrentYear = (
  startYear: number,
  endYear: number,
  progress: number
): number => {
  // Ensure progress is between 0 and 1
  progress = Math.max(0, Math.min(1, progress));
  
  // Calculate the total duration
  const duration = Math.abs(endYear - startYear);
  
  // Calculate the year based on progress
  const yearDifference = duration * progress;
  
  // Handle both BCE and CE years
  let currentYear: number;
  if (startYear < 0 && endYear < 0) {
    // Both years are BCE
    currentYear = startYear + yearDifference;
  } else if (startYear < 0 && endYear >= 0) {
    // Transition from BCE to CE
    if (progress <= Math.abs(startYear) / duration) {
      currentYear = startYear + yearDifference;
    } else {
      currentYear = yearDifference - Math.abs(startYear);
    }
  } else {
    // Both years are CE
    currentYear = startYear + yearDifference;
  }
  
  // Round to nearest year
  return Math.round(currentYear);
};

export const sortEventsByDate = (events: HistoricalEvent[]): HistoricalEvent[] => {
  return [...events].sort((a, b) => a.date - b.date);
};

export const filterEventsByCategory = (
  events: HistoricalEvent[],
  category: HistoricalEvent['category']
): HistoricalEvent[] => {
  return events.filter(event => event.category === category);
};

export const findOverlappingDynasties = (dynasties: Dynasty[]): [Dynasty, Dynasty][] => {
  const overlaps: [Dynasty, Dynasty][] = [];
  
  for (let i = 0; i < dynasties.length; i++) {
    for (let j = i + 1; j < dynasties.length; j++) {
      const d1 = dynasties[i];
      const d2 = dynasties[j];
      
      if (d1.period.start <= d2.period.end && d2.period.start <= d1.period.end) {
        overlaps.push([d1, d2]);
      }
    }
  }
  
  return overlaps;
};