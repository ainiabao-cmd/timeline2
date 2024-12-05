import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Achievement, EventCategory } from '../types/timeline';
import { 
  Landmark, 
  Swords, 
  Music, 
  Coins, 
  FlaskConical
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AchievementsPanelProps {
  achievements: Achievement[];
  visible: boolean;
  isMobile?: boolean;
}

export const AchievementsPanel: React.FC<AchievementsPanelProps> = ({
  achievements,
  visible,
  isMobile = false,
}) => {
  const { t } = useLanguage();

  const getCategoryIcon = (category: EventCategory) => {
    switch (category) {
      case 'political':
        return <Landmark className="w-5 h-5" />;
      case 'military':
        return <Swords className="w-5 h-5" />;
      case 'cultural':
        return <Music className="w-5 h-5" />;
      case 'economic':
        return <Coins className="w-5 h-5" />;
      case 'scientific':
        return <FlaskConical className="w-5 h-5" />;
      default:
        return <Landmark className="w-5 h-5" />;
    }
  };

  const getCategoryLabel = (category: EventCategory): { chinese: string; english: string } => {
    const labels = {
      political: { chinese: '政治', english: 'Political' },
      military: { chinese: '军事', english: 'Military' },
      cultural: { chinese: '文化', english: 'Cultural' },
      economic: { chinese: '经济', english: 'Economic' },
      scientific: { chinese: '科学', english: 'Scientific' }
    };
    return labels[category] || labels.political;
  };

  const baseClasses = isMobile
    ? "w-full bg-transparent"
    : "fixed right-0 top-0 bottom-0 w-96 bg-gray-900/95 backdrop-blur-md border-l border-white/10";

  return (
    <div className={`${baseClasses} overflow-y-auto`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          {t({ chinese: '重要成就', english: 'Major Achievements' })}
        </h2>
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.title.english}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white/80">
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {t(achievement.title)}
                  </h3>
                </div>
                <p className="text-white/80 text-sm mb-3">
                  {t(achievement.description)}
                </p>
                <div className="text-sm">
                  <span className="text-white/60">
                    {t({ chinese: '影响：', english: 'Impact: ' })}
                  </span>
                  <span className="text-white">{t(achievement.impact)}</span>
                </div>
                {achievement.year && (
                  <div className="text-sm mt-1">
                    <span className="text-white/60">
                      {t({ chinese: '年份：', english: 'Year: ' })}
                    </span>
                    <span className="text-white">{Math.abs(achievement.year)} BCE</span>
                  </div>
                )}
                <div className="text-sm mt-1">
                  <span className="text-white/60">
                    {t({ chinese: '类别：', english: 'Category: ' })}
                  </span>
                  <span className="text-white">
                    {t(getCategoryLabel(achievement.category))}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};