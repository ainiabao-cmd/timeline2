import { Dynasty } from '../types/timeline';

export interface DynastyTheme {
  id: string;
  gradient: {
    from: string;
    via?: string;
    to: string;
  };
  accent: string;
  text: string;
}

export const dynastyThemes: Record<string, DynastyTheme> = {
  // 夏朝：青铜器时代，使用青铜色调
  xia: {
    id: 'xia',
    gradient: {
      from: '#2D4F3C', // 深青铜绿
      via: '#3E6B56', // 中青铜绿
      to: '#4A7F66'   // 浅青铜绿
    },
    accent: '#89B399',
    text: '#D4E5DC'
  },
  
  // 商朝：甲骨文时代，使用象牙色调
  shang: {
    id: 'shang',
    gradient: {
      from: '#4A7F66', // 承接夏朝
      via: '#5D7A6A', // 过渡色
      to: '#8B7355'   // 象牙色
    },
    accent: '#D3C4A8',
    text: '#F4EDE4'
  },
  
  // 西周：礼乐文明，使用庄重的紫色调
  'western-zhou': {
    id: 'western-zhou',
    gradient: {
      from: '#8B7355', // 承接商朝
      via: '#796359', // 过渡色
      to: '#6B4C6B'   // 紫色
    },
    accent: '#9B7BA1',
    text: '#E8DEE9'
  },
  
  // 东周：百家争鸣，使用多彩过渡到统一
  'eastern-zhou': {
    id: 'eastern-zhou',
    gradient: {
      from: '#6B4C6B', // 承接西周
      via: '#5B4D5E', // 过渡色
      to: '#4B4E52'   // 统一色
    },
    accent: '#7A8599',
    text: '#DCE1E9'
  },
  
  // 秦朝：统一中国，使用黑色调象征权威
  qin: {
    id: 'qin',
    gradient: {
      from: '#4B4E52', // 承接东周
      via: '#3A3F44', // 过渡深灰
      to: '#2C3035'   // 近黑色
    },
    accent: '#4E5B6F',
    text: '#C7CCD4'
  },
  
  // 西汉：文景之治，使用温暖的红色调
  'western-han': {
    id: 'western-han',
    gradient: {
      from: '#2C3035', // 承接秦朝
      via: '#3D2F33', // 过渡暗红
      to: '#4E2E31'   // 汉红
    },
    accent: '#A65D57',
    text: '#F4D4D4'
  },
  
  // 东汉：科技发展，使用明亮的红色调
  'eastern-han': {
    id: 'eastern-han',
    gradient: {
      from: '#4E2E31', // 承接西汉
      via: '#5E383B', // 过渡红
      to: '#6E4245'   // 亮红
    },
    accent: '#CC8080',
    text: '#FFE6E6'
  }
};

export const getThemeById = (id: string): DynastyTheme => {
  return dynastyThemes[id] || dynastyThemes.xia;
};

export const getBackgroundGradient = (theme: DynastyTheme): string => {
  if (theme.gradient.via) {
    return `linear-gradient(to bottom, ${theme.gradient.from}, ${theme.gradient.via}, ${theme.gradient.to})`;
  }
  return `linear-gradient(to bottom, ${theme.gradient.from}, ${theme.gradient.to})`;
};