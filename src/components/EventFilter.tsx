import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { EventCategory } from '../types/timeline';
import { 
  Filter, 
  X,
  Landmark,
  Music,
  Swords,
  Coins,
  FlaskConical
} from 'lucide-react';

interface EventFilterProps {
  selectedCategories: EventCategory[];
  onCategoryToggle: (category: EventCategory) => void;
  className?: string;
}

export const EventFilter: React.FC<EventFilterProps> = ({
  selectedCategories,
  onCategoryToggle,
  className = ''
}) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const categories: { 
    id: EventCategory; 
    label: { chinese: string; english: string }; 
    icon: React.ReactNode 
  }[] = [
    { 
      id: 'political', 
      label: { chinese: '政治', english: 'Political' }, 
      icon: <Landmark className="w-4 h-4" />
    },
    { 
      id: 'military', 
      label: { chinese: '军事', english: 'Military' }, 
      icon: <Swords className="w-4 h-4" />
    },
    { 
      id: 'cultural', 
      label: { chinese: '文化', english: 'Cultural' }, 
      icon: <Music className="w-4 h-4" />
    },
    { 
      id: 'economic', 
      label: { chinese: '经济', english: 'Economic' }, 
      icon: <Coins className="w-4 h-4" />
    },
    { 
      id: 'scientific', 
      label: { chinese: '科学', english: 'Scientific' }, 
      icon: <FlaskConical className="w-4 h-4" />
    }
  ];

  return (
    <div className={`fixed left-8 bottom-24 z-50 ${className}`}>
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 shadow-xl"
        animate={{ width: isExpanded ? 'auto' : '48px' }}
      >
        <button
          className="w-12 h-12 flex items-center justify-center text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 pb-4"
          >
            <div className="space-y-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors
                    ${selectedCategories.includes(category.id)
                      ? 'bg-white/20 text-white'
                      : 'text-white/60 hover:bg-white/10'
                    }`}
                  onClick={() => onCategoryToggle(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`${
                    selectedCategories.includes(category.id)
                      ? 'text-white'
                      : 'text-white/60'
                  }`}>
                    {category.icon}
                  </span>
                  <span className="text-sm">
                    {t(category.label)}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};