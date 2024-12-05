import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dynasty, HistoricalEvent } from '../types/timeline';
import { DynastyTimeline } from './DynastyTimeline';
import { EventModal } from './EventModal';
import { warringStatesKingdoms } from '../data';
import { getThemeById, getBackgroundGradient } from '../styles/dynastyThemes';

interface DynastySectionProps {
  dynasty: Dynasty;
  onYearChange: (year: number) => void;
  onDynastyInView: (inView: boolean) => void;
  selectedCategories: HistoricalEvent['category'][];
}

export const DynastySection: React.FC<DynastySectionProps> = ({
  dynasty,
  onYearChange,
  onDynastyInView,
  selectedCategories,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const theme = getThemeById(dynasty.id);
  const backgroundGradient = getBackgroundGradient(theme);
  
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      onDynastyInView(inView);
    },
  });

  const isWarringStates = dynasty.id === 'eastern-zhou';

  return (
    <>
      <motion.section
        ref={ref}
        className="relative min-h-screen"
        style={{
          background: backgroundGradient,
          color: theme.text
        }}
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative mx-auto px-4 z-10">
          <DynastyTimeline
            dynasty={dynasty}
            theme={theme}
            kingdoms={isWarringStates ? warringStatesKingdoms : undefined}
            onEventClick={setSelectedEvent}
            onYearChange={onYearChange}
            selectedCategories={selectedCategories}
          />
        </div>
      </motion.section>

      <EventModal
        event={selectedEvent}
        theme={theme}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};