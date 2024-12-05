import { Dynasty } from '../types/timeline';

export const earlyDynasties: Dynasty[] = [
  {
    id: 'xia',
    name: {
      chinese: '夏朝',
      english: 'Xia Dynasty'
    },
    period: {
      start: -2070,
      end: -1600
    },
    capital: ['二里头', 'Erlitou'],
    notableEvents: [
      {
        id: 'xia-founding',
        date: -2070,
        title: {
          chinese: '禹建立夏朝',
          english: 'Yu Establishes Xia Dynasty'
        },
        description: {
          chinese: '大禹建立中国历史上第一个王朝。',
          english: 'Yu the Great establishes the first dynasty in Chinese history'
        },
        category: 'political',
        importance: 1,
        image: {
          url: 'https://pic.rmb.bdstatic.com/cms/efd79a1aed5054797e117e66cb99b12b_1701241293.3176_338.jpeg',
          caption: {
            chinese: '夏朝建立示意图',
            english: 'Illustration of Xia Dynasty Establishment'
          }
        }
      },
      {
        id: 'gun-yu-flood',
        date: -2000,
        title: {
          chinese: '大禹治水',
          english: 'Yu the Great Controls the Floods'
        },
        description: {
          chinese: '大禹成功治理黄河水患，开创科学治水的先河。',
          english: 'Yu successfully manages the Great Flood through innovative water management techniques'
        },
        category: 'scientific',
        importance: 1,
        image: {
          url: 'https://q0.itc.cn/images01/20240309/f1a8885a6c994b8186f074bd4f4377e5.jpeg',
          caption: {
            chinese: '大禹治水场景再现',
            english: 'Reenactment of Yu\'s Flood Control'
          }
        }
      },
      {
        id: 'erlitou-capital',
        date: -1900,
        title: {
          chinese: '二里头都城建立',
          english: 'Establishment of Erlitou Capital'
        },
        description: {
          chinese: '建立二里头都城，展现先进的城市规划理念。',
          english: 'Construction of the Erlitou capital city, showing advanced urban planning'
        },
        category: 'cultural',
        importance: 2,
        image: {
          url: 'https://b0.bdstatic.com/14f5e234062b32d879a53043a82a9c99.jpg',
          caption: {
            chinese: '二里头遗址',
            english: 'Erlitou Archaeological Site'
          }
        }
      },
      {
        id: 'bronze-casting',
        date: -1800,
        title: {
          chinese: '青铜器制造',
          english: 'Bronze Casting Development'
        },
        description: {
          chinese: '发展成熟的青铜器制造技术，铸造礼器和兵器。',
          english: 'Advanced bronze casting techniques emerge during middle Xia period'
        },
        category: 'scientific',
        importance: 2,
        image: {
          url: 'https://5b0988e595225.cdn.sohucs.com/images/20190806/6f261d52104e4ab5af1d8e915825ac91.jpeg',
          caption: {
            chinese: '青铜器制作场景',
            english: 'Bronze Casting Scene'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '青铜冶炼',
          english: 'Bronze Metallurgy'
        },
        description: {
          chinese: '发展青铜器铸造技术',
          english: 'Development of bronze casting techniques'
        },
        category: 'scientific',
        impact: {
          chinese: '奠定中国青铜时代的基础',
          english: 'Laid foundation for Chinese bronze age'
        }
      },
      {
        title: {
          chinese: '水利工程',
          english: 'Flood Control'
        },
        description: {
          chinese: '开创系统治水方法',
          english: 'Advanced water management systems'
        },
        category: 'scientific',
        impact: {
          chinese: '促进黄河流域农业发展',
          english: 'Enabled agricultural development in Yellow River valley'
        }
      }
    ],
    successor: ['shang']
  },
  {
    id: 'shang',
    name: {
      chinese: '商朝',
      english: 'Shang Dynasty'
    },
    period: {
      start: -1600,
      end: -1046
    },
    capital: ['殷', '安阳'],
    notableEvents: [
      {
        id: 'oracle-bones',
        date: -1200,
        title: {
          chinese: '甲骨文使用',
          english: 'Oracle Bone Inscriptions'
        },
        description: {
          chinese: '发展并使用甲骨文进行占卜记录，是中国最早的成熟文字系统。',
          english: 'Development and use of oracle bone inscriptions for divination'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://n.sinaimg.cn/spider20230407/228/w1080h1548/20230407/a73f-cae716b75a729d9269ff9a319e8c4223.jpg',
          caption: {
            chinese: '甲骨文实物',
            english: 'Oracle Bone Inscription'
          }
        }
      },
      {
        id: 'anyang-capital',
        date: -1300,
        title: {
          chinese: '安阳建都',
          english: 'Establishment of Anyang Capital'
        },
        description: {
          chinese: '迁都安阳，标志着商代晚期的开始。',
          english: 'Moving the capital to Anyang, marking the beginning of the late Shang period'
        },
        category: 'political',
        importance: 2,
        image: {
          url: 'https://copyright.bdstatic.com/vcg/creative/2da08d72fec254f76e5e9f354abf638a.jpg',
          caption: {
            chinese: '安阳古城遗址',
            english: 'Ancient Anyang City Ruins'
          }
        }
      },
      {
        id: 'bronze-vessels',
        date: -1400,
        title: {
          chinese: '青铜礼器发展',
          english: 'Development of Ritual Bronze Vessels'
        },
        description: {
          chinese: '制作精美的青铜礼器，用于宗教祭祀活动。',
          english: 'Creation of sophisticated bronze vessels for religious ceremonies'
        },
        category: 'cultural',
        importance: 2,
        image: {
          url: 'https://pic.rmb.bdstatic.com/bjh/240115/events/48fd52a6d0c01fc8ee28801734a8df399357.jpeg',
          caption: {
            chinese: '商代青铜器',
            english: 'Shang Dynasty Bronze Vessels'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '文字系统',
          english: 'Writing System'
        },
        description: {
          chinese: '通过甲骨文发展系统性的文字',
          english: 'Development of systematic writing through oracle bones'
        },
        category: 'cultural',
        impact: {
          chinese: '形成中国最早的成熟文字体系',
          english: 'First substantial body of Chinese writing'
        }
      },
      {
        title: {
          chinese: '青铜工艺',
          english: 'Bronze Casting'
        },
        description: {
          chinese: '发展精湛的青铜器制作技术',
          english: 'Advanced bronze casting for ceremonial vessels'
        },
        category: 'scientific',
        impact: {
          chinese: '确立中国青铜器和礼器艺术标准',
          english: 'Set standards for Chinese metallurgy and ritual art'
        }
      }
    ],
    predecessor: ['xia'],
    successor: ['zhou']
  }
];