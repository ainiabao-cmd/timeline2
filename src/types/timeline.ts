import { ReactNode } from 'react';

export type EventCategory = 
  | 'political'    // 政治
  | 'military'     // 军事
  | 'cultural'     // 文化
  | 'economic'     // 经济
  | 'scientific';  // 科学

export interface Dynasty {
  id: string;
  name: {
    chinese: string;
    english: string;
  };
  period: {
    start: number;
    end: number;
  };
  capital: string[];
  notableEvents: HistoricalEvent[];
  achievements: Achievement[];
  emperors?: Emperor[];
  successor?: string[];
  predecessor?: string[];
}

export interface HistoricalEvent {
  id: string;
  date: number;
  title: {
    chinese: string;
    english: string;
  };
  description: {
    chinese: string;
    english: string;
  };
  category: EventCategory;
  importance: 1 | 2 | 3;
  location?: string;
  image?: {
    url: string;
    caption: {
      chinese: string;
      english: string;
    };
  };
}

export interface Achievement {
  title: {
    chinese: string;
    english: string;
  };
  description: {
    chinese: string;
    english: string;
  };
  category: EventCategory;
  impact: {
    chinese: string;
    english: string;
  };
  year?: number;
}

export interface Emperor {
  name: {
    chinese: string;
    english: string;
    temple?: string;
  };
  reignPeriod: {
    start: number;
    end: number;
  };
  significance: {
    chinese: string;
    english: string;
  };
  achievements: {
    chinese: string;
    english: string;
  }[];
}

export interface Kingdom {
  id: string;
  name: {
    chinese: string;
    english: string;
  };
  period: {
    start: number;
    end: number;
  };
  capital: string[];
  notableRulers: string[];
  events: HistoricalEvent[];
}