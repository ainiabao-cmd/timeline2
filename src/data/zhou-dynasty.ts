import { Dynasty } from '../types/timeline';

export const zhouDynasties: Dynasty[] = [
  {
    id: 'western-zhou',
    name: {
      chinese: '西周',
      english: 'Western Zhou Dynasty'
    },
    period: {
      start: -1046,
      end: -771
    },
    capital: ['镐京', '丰邑'],
    notableEvents: [
      {
        id: 'mandate-of-heaven',
        date: -1046,
        title: {
          chinese: '天命思想确立',
          english: 'Establishment of the Mandate of Heaven'
        },
        description: {
          chinese: '确立"天命"政治理论，为王权统治提供理论基础。',
          english: 'Development of the political theory justifying royal authority through divine mandate'
        },
        category: 'political',
        importance: 1,
        image: {
          url: 'https://t11.baidu.com/it/u=1690034667,176245364&fm=30&app=106&f=JPEG?w=640&h=431&s=06B2E422218558E842F9E9D70000D0A2',
          caption: {
            chinese: '天命思想示意图',
            english: 'Illustration of the Mandate of Heaven concept'
          }
        }
      },
      {
        id: 'zhou-ritual',
        date: -1000,
        title: {
          chinese: '周礼制定',
          english: 'Establishment of Zhou Rituals'
        },
        description: {
          chinese: '系统制定礼乐制度，规范社会秩序和等级制度。',
          english: 'Codification of ritual and ceremonial systems establishing social order'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://img2.baidu.com/it/u=1942723371,2437435052&fm=253&fmt=auto&app=138&f=JPEG?w=910&h=500',
          caption: {
            chinese: '周代礼乐场景',
            english: 'Zhou Dynasty Ritual Scene'
          }
        }
      },
      {
        id: 'fengjian-system',
        date: -1035,
        title: {
          chinese: '分封制确立',
          english: 'Establishment of Fengjian System'
        },
        description: {
          chinese: '实行分封制度，将土地分封给宗室贵族，建立等级制度。',
          english: 'Implementation of the feudal system of land distribution'
        },
        category: 'political',
        importance: 1,
        image: {
          url: 'https://t11.baidu.com/it/u=1690034667,176245364&fm=30&app=106&f=JPEG?w=640&h=431&s=06B2E422218558E842F9E9D70000D0A2',
          caption: {
            chinese: '分封制示意图',
            english: 'Illustration of the Fengjian System'
          }
        }
      },
      {
        id: 'bronze-inscriptions',
        date: -950,
        title: {
          chinese: '金文繁荣',
          english: 'Flourishing of Bronze Inscriptions'
        },
        description: {
          chinese: '青铜器铭文艺术达到顶峰，记录重要历史事件。',
          english: 'Peak period of inscriptions on bronze vessels recording historical events'
        },
        category: 'cultural',
        importance: 2,
        image: {
          url: 'https://img0.baidu.com/it/u=1568531305,120970287&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=549',
          caption: {
            chinese: '西周青铜器铭文',
            english: 'Western Zhou Bronze Inscriptions'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '封建制度',
          english: 'Feudal System'
        },
        description: {
          chinese: '建立分封制度',
          english: 'Implementation of the fengjian system'
        },
        category: 'political',
        impact: {
          chinese: '确立中国封建社会结构',
          english: 'Established Chinese feudal society structure'
        }
      },
      {
        title: {
          chinese: '青铜工艺',
          english: 'Bronze Technology'
        },
        description: {
          chinese: '发展先进的青铜铸造技术',
          english: 'Advanced bronze casting techniques'
        },
        category: 'scientific',
        impact: {
          chinese: '创造精美的礼器和武器',
          english: 'Created sophisticated ritual vessels and weapons'
        }
      }
    ],
    predecessor: ['shang'],
    successor: ['eastern-zhou']
  },
  {
    id: 'eastern-zhou',
    name: {
      chinese: '东周',
      english: 'Eastern Zhou Dynasty'
    },
    period: {
      start: -770,
      end: -256
    },
    capital: ['洛阳'],
    notableEvents: [
      {
        id: 'spring-autumn',
        date: -770,
        title: {
          chinese: '春秋时代开始',
          english: 'Beginning of Spring and Autumn Period'
        },
        description: {
          chinese: '诸侯争霸时期开始，政治分裂与思想文化蓬勃发展。',
          english: 'Period of political fragmentation and philosophical development'
        },
        category: 'political',
        importance: 1,
        image: {
          url: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?q=80&w=2070&auto=format&fit=crop',
          caption: {
            chinese: '春秋时期场景',
            english: 'Spring and Autumn Period Scene'
          }
        }
      },
      {
        id: 'confucius-teaching',
        date: -500,
        title: {
          chinese: '孔子讲学',
          english: 'Confucius Teaching Period'
        },
        description: {
          chinese: '孔子周游列国，传播儒家思想。',
          english: 'Confucius travels and spreads his philosophical teachings'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://images.unsplash.com/photo-1553659971-f01207815844?q=80&w=2064&auto=format&fit=crop',
          caption: {
            chinese: '孔子教学场景',
            english: 'Confucius Teaching Scene'
          }
        }
      },
      {
        id: 'iron-technology',
        date: -600,
        title: {
          chinese: '铁器时代',
          english: 'Iron Age Technology'
        },
        description: {
          chinese: '铁器广泛使用，促进农业和军事发展。',
          english: 'Widespread adoption of iron tools and weapons'
        },
        category: 'scientific',
        importance: 2,
        image: {
          url: 'https://images.unsplash.com/photo-1535813547-3e2a91ab3d68?q=80&w=2070&auto=format&fit=crop',
          caption: {
            chinese: '铁器制造场景',
            english: 'Iron Working Scene'
          }
        }
      },
      {
        id: 'hundred-schools',
        date: -550,
        title: {
          chinese: '百家争鸣',
          english: 'Hundred Schools of Thought'
        },
        description: {
          chinese: '诸子百家思想争鸣，形成多元文化格局。',
          english: 'Period of great intellectual and cultural diversity'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop',
          caption: {
            chinese: '诸子百家思想交流',
            english: 'Philosophers of Various Schools'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '百家争鸣',
          english: 'Hundred Schools of Thought'
        },
        description: {
          chinese: '各种哲学流派的繁荣发展',
          english: 'Flourishing of various philosophical schools'
        },
        category: 'cultural',
        impact: {
          chinese: '塑造中国传统思想体系',
          english: 'Shaped Chinese intellectual tradition'
        }
      },
      {
        title: {
          chinese: '铁器冶炼',
          english: 'Iron Smelting'
        },
        description: {
          chinese: '发展先进的铁器冶炼技术',
          english: 'Development of advanced iron smelting techniques'
        },
        category: 'scientific',
        impact: {
          chinese: '革新农业和军事技术',
          english: 'Revolutionized agriculture and warfare'
        }
      }
    ],
    predecessor: ['western-zhou'],
    successor: ['qin']
  }
];