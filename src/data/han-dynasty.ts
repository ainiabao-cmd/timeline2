import { Dynasty } from '../types/timeline';

export const hanDynasties: Dynasty[] = [
  {
    id: 'western-han',
    name: {
      chinese: '西汉',
      english: 'Western Han Dynasty'
    },
    period: {
      start: -202,
      end: 9
    },
    capital: ['长安'],
    notableEvents: [
      {
        id: 'silk-road',
        date: -130,
        title: {
          chinese: '丝绸之路开通',
          english: 'Opening of the Silk Road'
        },
        description: {
          chinese: '开辟连接中国与中亚、欧洲的贸易路线，促进文化交流。',
          english: 'Establishment of trade routes connecting China with Central Asia and Europe'
        },
        category: 'economic',
        importance: 1,
        image: {
          url: 'https://img1.baidu.com/it/u=3104002946,226162774&fm=253&fmt=auto&app=120&f=JPEG?w=654&h=368',
          caption: {
            chinese: '丝绸之路驼队',
            english: 'Camel Caravan on the Silk Road'
          }
        }
      },
      {
        id: 'zhang-qian-mission',
        date: -138,
        title: {
          chinese: '张骞出使西域',
          english: 'Zhang Qian\'s Diplomatic Mission'
        },
        description: {
          chinese: '首次官方出使中亚，扩大对西域的认知和影响。',
          english: 'First official diplomatic mission to Central Asia, expanding Chinese influence'
        },
        category: 'political',
        importance: 1,
        image: {
          url: 'https://b0.bdstatic.com/292127236a480fea281bcd0d450d38ac.jpg',
          caption: {
            chinese: '张骞出使西域场景',
            english: 'Zhang Qian\'s Journey to the Western Regions'
          }
        }
      },
      {
        id: 'sima-qian-records',
        date: -109,
        title: {
          chinese: '司马迁著史记',
          english: 'Sima Qian Writes Records of the Grand Historian'
        },
        description: {
          chinese: '完成中国第一部纪传体通史，奠定史学基础。',
          english: 'Completion of the first systematic Chinese historical text'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://pic.rmb.bdstatic.com/bjh/5634e1d5d67f4172e2b0a29d7eb264bb4146.jpeg@h_1280',
          caption: {
            chinese: '史记手稿',
            english: 'Manuscript of Records of the Grand Historian'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '丝绸生产',
          english: 'Silk Production'
        },
        description: {
          chinese: '完善丝绸生产技术并垄断生产',
          english: 'Refinement and monopolization of silk production techniques'
        },
        category: 'scientific',
        impact: {
          chinese: '确立中国作为丝绸贸易中心的地位',
          english: 'Established China as the source of silk for international trade'
        }
      },
      {
        title: {
          chinese: '史学发展',
          english: 'Historical Records'
        },
        description: {
          chinese: '系统性历史编纂方法的发展',
          english: 'Development of systematic historical writing'
        },
        category: 'cultural',
        impact: {
          chinese: '确立中国史学传统标准',
          english: 'Set standards for Chinese historiography'
        }
      }
    ],
    predecessor: ['qin'],
    successor: ['eastern-han']
  },
  {
    id: 'eastern-han',
    name: {
      chinese: '东汉',
      english: 'Eastern Han Dynasty'
    },
    period: {
      start: 25,
      end: 220
    },
    capital: ['洛阳'],
    notableEvents: [
      {
        id: 'paper-invention',
        date: 105,
        title: {
          chinese: '蔡伦造纸',
          english: 'Invention of Paper by Cai Lun'
        },
        description: {
          chinese: '改进造纸技术，使纸张成为主要书写材料。',
          english: 'Development of improved papermaking technology'
        },
        category: 'scientific',
        importance: 1,
        image: {
          url: 'https://img1.baidu.com/it/u=407660837,2886259453&fm=253&fmt=auto&app=120&f=JPEG?w=838&h=500',
          caption: {
            chinese: '传统造纸工艺',
            english: 'Traditional Papermaking Process'
          }
        }
      },
      {
        id: 'buddhism-introduction',
        date: 68,
        title: {
          chinese: '佛教传入',
          english: 'Introduction of Buddhism'
        },
        description: {
          chinese: '佛教正式传入中国，对中国文化产生深远影响。',
          english: 'Official introduction of Buddhism to China'
        },
        category: 'cultural',
        importance: 1,
        image: {
          url: 'https://b0.bdstatic.com/fe447e010840903f3b62190c4e32dda5.jpg@h_1280',
          caption: {
            chinese: '早期佛教艺术',
            english: 'Early Buddhist Art in China'
          }
        }
      },
      {
        id: 'seismograph',
        date: 132,
        title: {
          chinese: '张衡发明地动仪',
          english: 'Zhang Heng Invents Seismograph'
        },
        description: {
          chinese: '发明世界上第一台地震检测仪器。',
          english: 'First earthquake detection device in history'
        },
        category: 'scientific',
        importance: 1,
        image: {
          url: 'https://img0.baidu.com/it/u=3755910350,1382333592&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
          caption: {
            chinese: '地动仪复原模型',
            english: 'Reconstruction of the Seismograph'
          }
        }
      }
    ],
    achievements: [
      {
        title: {
          chinese: '造纸术',
          english: 'Paper Making'
        },
        description: {
          chinese: '改进和推广造纸技术',
          english: 'Invention and refinement of paper production'
        },
        category: 'scientific',
        impact: {
          chinese: '革新信息存储与传播方式',
          english: 'Revolutionized information storage and transmission'
        }
      },
      {
        title: {
          chinese: '科学仪器',
          english: 'Scientific Instruments'
        },
        description: {
          chinese: '发展先进的科学仪器',
          english: 'Development of advanced scientific devices'
        },
        category: 'scientific',
        impact: {
          chinese: '推动中国天文学和地震学发展',
          english: 'Advanced Chinese astronomy and seismology'
        }
      }
    ],
    predecessor: ['western-han']
  }
];