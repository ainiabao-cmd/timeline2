import { Kingdom } from '../types/timeline';

export const warringStatesKingdoms: Kingdom[] = [
  {
    id: 'qi-kingdom',
    name: {
      chinese: '齐国',
      english: 'State of Qi'
    },
    period: {
      start: -770,
      end: -221
    },
    capital: ['Linzi'],
    notableRulers: ['King Wei', 'King Xuan'],
    events: [
      {
        id: 'jixia-academy',
        date: -320,
        title: {
          chinese: '稷下学宫建立',
          english: 'Establishment of Jixia Academy'
        },
        description: 'Creation of the first state-sponsored academy in China',
        category: 'cultural',
        importance: 1
      },
      {
        id: 'qi-reforms',
        date: -356,
        title: {
          chinese: '齐国变法',
          english: 'Qi State Reforms'
        },
        description: 'Implementation of political and economic reforms',
        category: 'political',
        importance: 2
      },
      {
        id: 'qi-commerce',
        date: -340,
        title: {
          chinese: '齐国商业繁荣',
          english: 'Qi Commercial Prosperity'
        },
        description: 'Development of maritime trade and commerce',
        category: 'economic',
        importance: 2
      }
    ]
  },
  {
    id: 'chu-kingdom',
    name: {
      chinese: '楚国',
      english: 'State of Chu'
    },
    period: {
      start: -770,
      end: -223
    },
    capital: ['Ying', 'Shouchun'],
    notableRulers: ['King Huai', 'King Qingxiang'],
    events: [
      {
        id: 'chu-culture',
        date: -400,
        title: {
          chinese: '楚文化兴盛',
          english: 'Flourishing of Chu Culture'
        },
        description: 'Development of distinctive Chu cultural traditions',
        category: 'cultural',
        importance: 2
      },
      {
        id: 'chu-zhao-alliance',
        date: -241,
        title: {
          chinese: '楚赵联盟',
          english: 'Chu-Zhao Alliance'
        },
        description: 'Formation of alliance between Chu and Zhao against Qin',
        category: 'political',
        importance: 2
      },
      {
        id: 'chu-poetry',
        date: -300,
        title: {
          chinese: '楚辞创作',
          english: 'Creation of Chu Ci Poetry'
        },
        description: 'Development of distinctive southern poetic traditions',
        category: 'cultural',
        importance: 1
      }
    ]
  },
  {
    id: 'qin-kingdom',
    name: {
      chinese: '秦国',
      english: 'State of Qin'
    },
    period: {
      start: -770,
      end: -221
    },
    capital: ['Xianyang'],
    notableRulers: ['Duke Xiao', 'King Zheng (later Qin Shi Huang)'],
    events: [
      {
        id: 'legalism',
        date: -361,
        title: {
          chinese: '商鞅变法',
          english: 'Reforms of Shang Yang'
        },
        description: 'Implementation of Legalist reforms strengthening the Qin state',
        category: 'political',
        importance: 1
      },
      {
        id: 'qin-expansion',
        date: -316,
        title: {
          chinese: '秦灭蜀国',
          english: 'Qin Conquers Shu'
        },
        description: 'Conquest of Shu state, expanding Qin territory into Sichuan',
        category: 'military',
        importance: 2
      },
      {
        id: 'dujiangyan',
        date: -256,
        title: {
          chinese: '都江堰水利工程',
          english: 'Dujiangyan Irrigation System'
        },
        description: 'Construction of sophisticated irrigation system in Sichuan',
        category: 'technological',
        importance: 1
      }
    ]
  },
  {
    id: 'zhao-kingdom',
    name: {
      chinese: '赵国',
      english: 'State of Zhao'
    },
    period: {
      start: -403,
      end: -222
    },
    capital: ['Handan'],
    notableRulers: ['King Wuling', 'King Xiaocheng'],
    events: [
      {
        id: 'zhao-cavalry',
        date: -307,
        title: {
          chinese: '赵武灵王胡服骑射',
          english: 'Adoption of Nomadic Cavalry Tactics'
        },
        description: 'King Wuling reforms military by adopting nomadic dress and cavalry tactics',
        category: 'military',
        importance: 1
      },
      {
        id: 'zhao-reform',
        date: -325,
        title: {
          chinese: '赵国改革',
          english: 'Zhao Military Reforms'
        },
        description: 'Comprehensive military reforms including adoption of cavalry',
        category: 'military',
        importance: 2
      }
    ]
  },
  {
    id: 'wei-kingdom',
    name: {
      chinese: '魏国',
      english: 'State of Wei'
    },
    period: {
      start: -403,
      end: -225
    },
    capital: ['Daliang'],
    notableRulers: ['Marquess Wen', 'King Hui'],
    events: [
      {
        id: 'wei-reforms',
        date: -445,
        title: {
          chinese: '魏文侯变法',
          english: 'Reforms of Marquess Wen'
        },
        description: 'Implementation of reforms strengthening Wei\'s military and economy',
        category: 'political',
        importance: 2
      },
      {
        id: 'wei-agriculture',
        date: -420,
        title: {
          chinese: '魏国农业改革',
          english: 'Wei Agricultural Reforms'
        },
        description: 'Implementation of advanced farming techniques',
        category: 'economic',
        importance: 2
      }
    ]
  },
  {
    id: 'han-kingdom',
    name: {
      chinese: '韩国',
      english: 'State of Han'
    },
    period: {
      start: -403,
      end: -230
    },
    capital: ['Xinzheng'],
    notableRulers: ['Marquess Xi', 'King Huanhui'],
    events: [
      {
        id: 'han-innovation',
        date: -355,
        title: {
          chinese: '韩国工匠',
          english: 'Han State Innovation'
        },
        description: 'Development of advanced iron-working techniques',
        category: 'technological',
        importance: 2
      },
      {
        id: 'han-military',
        date: -340,
        title: {
          chinese: '韩国军事改革',
          english: 'Han Military Reforms'
        },
        description: 'Development of advanced crossbow technology',
        category: 'military',
        importance: 2
      }
    ]
  },
  {
    id: 'yan-kingdom',
    name: {
      chinese: '燕国',
      english: 'State of Yan'
    },
    period: {
      start: -433,
      end: -228
    },
    capital: ['Ji'],
    notableRulers: ['King Zhao', 'King Xi'],
    events: [
      {
        id: 'yan-expansion',
        date: -311,
        title: {
          chinese: '燕国扩张',
          english: 'Yan Territorial Expansion'
        },
        description: 'Expansion into northern territories and conflict with Xiongnu',
        category: 'military',
        importance: 2
      },
      {
        id: 'yan-philosophy',
        date: -300,
        title: {
          chinese: '燕国学术发展',
          english: 'Yan Philosophical Development'
        },
        description: 'Establishment of scholarly traditions',
        category: 'cultural',
        importance: 2
      }
    ]
  }
];