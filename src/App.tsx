import React, { useState, useEffect } from 'react';
import { TimeIndicator } from './components/TimeIndicator';
import { DynastySection } from './components/DynastySection';
import { AchievementsPanel } from './components/AchievementsPanel';
import { LanguageToggle } from './components/LanguageToggle';
import { EventFilter } from './components/EventFilter';
import { MobileNav } from './components/MobileNav';
import { DynamicTitle } from './components/DynamicTitle';
import { LanguageProvider } from './contexts/LanguageContext';
import { earlyDynasties, zhouDynasties, qinDynasty, hanDynasties } from './data';
import { Achievement, Dynasty, EventCategory } from './types/timeline';
import { Menu } from 'lucide-react';

function App() {
  const [currentYear, setCurrentYear] = useState(earlyDynasties[0].period.start);
  const [currentDynasty, setCurrentDynasty] = useState<Dynasty | null>(null);
  const [currentAchievements, setCurrentAchievements] = useState<Achievement[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<EventCategory[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const allDynasties = [...earlyDynasties, ...zhouDynasties, qinDynasty, ...hanDynasties];

  useEffect(() => {
    const dynasty = allDynasties.find(d => 
      currentYear >= d.period.start && currentYear <= d.period.end
    );
    setCurrentDynasty(dynasty || null);
  }, [currentYear]);

  const handleCategoryToggle = (category: EventCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen "
       style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #2D4F3C'
      }}>
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6">
          <DynamicTitle 
            currentDynasty={currentDynasty}
            startYear={currentDynasty?.period.start}
            endYear={currentDynasty?.period.end}
          />
        </div>

        <TimeIndicator currentYear={currentYear} />
        <EventFilter
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
          />

        <button
          className="fixed top-4 right-4 z-50 p-2 bg-white/10 rounded-lg backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        <div className="flex flex-col md:flex-row">
          <MobileNav
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            currentYear={currentYear}
            achievements={currentAchievements}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
          />
          
          <main className="flex-1 md:mr-96 pt-24">
            {allDynasties.map((dynasty) => (
              <DynastySection
                key={dynasty.id}
                dynasty={dynasty}
                onYearChange={setCurrentYear}
                onDynastyInView={(inView) => {
                  if (inView) {
                    setCurrentAchievements(dynasty.achievements);
                  }
                }}
                selectedCategories={selectedCategories}
              />
            ))}
          </main>

          <div className="hidden md:block">
            <AchievementsPanel
              achievements={currentAchievements}
              visible={true}
            />
          </div>

          <LanguageToggle />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;