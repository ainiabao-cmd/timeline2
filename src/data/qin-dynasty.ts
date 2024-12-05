import { Dynasty } from '../types/timeline';

export const qinDynasty: Dynasty = {
  id: 'qin',
  name: {
    chinese: '秦朝',
    english: 'Qin Dynasty'
  },
  period: {
    start: -221,
    end: -206
  },
  capital: ['咸阳', 'Xianyang'],
  notableEvents: [
    {
      id: 'china-unification',
      date: -221,
      title: {
        chinese: '统一中国',
        english: 'Unification of China'
      },
      description: {
        chinese: '秦始皇统一六国，建立中国历史上第一个统一的帝国。',
        english: 'Qin Shi Huang unified China for the first time in history, establishing the first imperial dynasty.'
      },
      category: 'political',
      importance: 1,
      image: {
        url: 'https://img2.baidu.com/it/u=3073924376,2153140104&fm=253&fmt=auto&app=138&f=JPEG?w=784&h=500',
        caption: {
          chinese: '秦始皇统一中国示意图',
          english: 'Illustration of Qin Shi Huang\'s Unification of China'
        }
      }
    },
    {
      id: 'great-wall',
      date: -214,
      title: {
        chinese: '修建长城',
        english: 'Construction of the Great Wall'
      },
      description: {
        chinese: '连接并扩建现有城墙，形成统一的防御系统。',
        english: 'Connected and expanded existing walls to form a unified defense system.'
      },
      category: 'military',
      importance: 1,
      image: {
        url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop',
        caption: {
          chinese: '秦长城遗址',
          english: 'Remains of the Qin Great Wall'
        }
      }
    },
    {
      id: 'standardization',
      date: -221,
      title: {
        chinese: '书同文车同轨',
        english: 'Standardization of Writing and Measurements'
      },
      description: {
        chinese: '统一文字、货币、度量衡，促进全国经济文化交流。',
        english: 'Standardized writing system, currency, weights, and measures across China.'
      },
      category: 'cultural',
      importance: 1,
      image: {
        url: 'https://p0.itc.cn/q_70/images03/20220801/771ff36f7bc44700a81852990ab60962.jpeg',
        caption: {
          chinese: '秦代文字统一',
          english: 'Standardization of Chinese Characters in Qin Dynasty'
        }
      }
    },
    {
      id: 'burning-books',
      date: -213,
      title: {
        chinese: '焚书坑儒',
        english: 'Burning of Books and Burying of Scholars'
      },
      description: {
        chinese: '销毁非官方典籍，镇压知识分子，加强思想控制。',
        english: 'Destroyed non-approved texts and executed scholars to consolidate ideological control.'
      },
      category: 'political',
      importance: 1,
      image: {
        url: 'https://pic.rmb.bdstatic.com/bjh/775d7059959fdb11506aef8d0f2778b64269.jpeg',
        caption: {
          chinese: '焚书坑儒历史场景再现',
          english: 'Historical Reenactment of Book Burning'
        }
      }
    },
    {
      id: 'terracotta-army',
      date: -210,
      title: {
        chinese: '兵马俑建造',
        english: 'Construction of the Terracotta Army'
      },
      description: {
        chinese: '为秦始皇陵墓建造数以千计的真人大小陶俑。',
        english: 'Created thousands of life-sized terracotta warriors for Emperor Qin\'s tomb.'
      },
      category: 'cultural',
      importance: 1,
      image: {
        url: 'https://img1.baidu.com/it/u=2834201934,1040604088&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        caption: {
          chinese: '秦始皇兵马俑',
          english: 'The Terracotta Army of Emperor Qin'
        }
      }
    },
    {
      id: 'road-system',
      date: -212,
      title: {
        chinese: '驰道建设',
        english: 'Imperial Road System'
      },
      description: {
        chinese: '修建统一规格的道路网络，连接全国各地。',
        english: 'Constructed a network of standardized roads connecting the empire.'
      },
      category: 'scientific',
      importance: 2,
      image: {
        url: 'https://img0.baidu.com/it/u=2554328084,3773150100&fm=253&fmt=auto?w=640&h=407',
        caption: {
          chinese: '秦代驰道复原图',
          english: 'Reconstruction of Qin Dynasty Imperial Roads'
        }
      }
    }
  ],
  achievements: [
    {
      title: {
        chinese: '文字统一',
        english: 'Writing Standardization'
      },
      description: {
        chinese: '统一文字系统、度量衡和货币',
        english: 'Unified writing system, measurements, and currency'
      },
      category: 'cultural',
      impact: {
        chinese: '为中华文化统一奠定基础',
        english: 'Created foundation for Chinese cultural unity'
      },
      year: -221
    },
    {
      title: {
        chinese: '长城建设',
        english: 'Great Wall Construction'
      },
      description: {
        chinese: '连接和扩建防御工事',
        english: 'Connected and expanded defensive walls'
      },
      category: 'military',
      impact: {
        chinese: '建造世界上最大的军事工程',
        english: 'Created world\'s largest military structure'
      },
      year: -214
    },
    {
      title: {
        chinese: '兵马俑',
        english: 'Terracotta Warriors'
      },
      description: {
        chinese: '为帝陵建造真人大小的陶俑军团',
        english: 'Life-sized clay army for imperial tomb'
      },
      category: 'cultural',
      impact: {
        chinese: '展示了先进的雕塑技术和军事组织',
        english: 'Demonstrated advanced sculpture and military organization'
      },
      year: -210
    },
    {
      title: {
        chinese: '法制建设',
        english: 'Legal System'
      },
      description: {
        chinese: '实施统一的法律制度',
        english: 'Implemented standardized legal code'
      },
      category: 'political',
      impact: {
        chinese: '确立法家治国原则',
        english: 'Established Legalist governance principles'
      },
      year: -221
    }
  ],
  predecessor: ['eastern-zhou'],
  successor: ['western-han']
};