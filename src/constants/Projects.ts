import { Project, ProjectCategory } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'kronos',
    title: 'Kronos',
    category: ProjectCategory.WEB_APP,
    description: 'A time-tracking application for employees.',
    image: '/images/projects/kronos.png',
    tags: ['React', 'Node.js', 'Local Storage'],
    year: '2025',
    role: ['Sole Developer'],
    timeline: '8 Weeks',
    overview: 'A comprehensive time-tracking solution designed to help employees monitor their work hours and improve productivity.',
    challenge: 'Creating an intuitive interface that balances powerful features with ease of use for non-technical users.',
    solutions: [
      {
        icon: 'schedule',
        title: 'Time Tracking',
        description: 'Implemented intuitive time entry system with automatic calculations and comprehensive reporting features.'
      },
      {
        icon: 'dashboard',
        title: 'Analytics Dashboard',
        description: 'Built responsive dashboard with real-time productivity metrics and detailed time analysis.'
      }
    ],
    results: [
      { label: 'User Adoption', value: '95%' },
      { label: 'Time Saved', value: '3hrs/day' },
      { label: 'Productivity Increase', value: '40%' }
    ],
    github: 'https://github.com/userkace/kronos',
    site: 'https://kronos-eta.vercel.app'
  },
  {
    id: 'homesfarmsandland',
    title: 'Homes Farms and Land',
    category: ProjectCategory.ECOMMERCE,
    description: 'A real-estate website.',
    image: '/images/projects/homesfarmsandland.webp',
    tags: ['React', 'AWS', 'Tailwind'],
    year: '2025',
    role: ['Project Manager', 'Lead Developer'],
    timeline: '20 Weeks',
    overview: 'Modern real-estate platform showcasing properties with advanced search and filtering capabilities.',
    challenge: 'Migrating from legacy WordPress to a modern, scalable cloud infrastructure.',
    solutions: [
      {
        icon: 'cloud',
        title: 'Cloud Migration',
        description: 'Migrated from WordPress to modern React-based architecture with AWS cloud infrastructure.'
      },
      {
        icon: 'search',
        title: 'Advanced Search',
        description: 'Developed sophisticated property search and filtering system with real-time results.'
      }
    ],
    results: [
      { label: 'Load Time', value: '2.1s' },
      { label: 'SEO Score', value: '95/100' },
      { label: 'Mobile Performance', value: '92/100' }
    ],
    site: 'https://homesfarmsandland.com'
  },
  {
    id: 'truevoice',
    title: 'TrueVoice',
    category: ProjectCategory.AI_ML,
    description: 'A browser extension that helps detect AI-generated voice recordings with machine learning.',
    image: '/images/projects/truevoice.gif',
    tags: ['JavaScript', 'TensorFlow', 'Chrome Extension'],
    year: '2024',
    role: ['Software Engineer'],
    timeline: '6 Weeks',
    overview: 'Innovative browser extension using machine learning to identify AI-generated audio content.',
    challenge: 'Implementing real-time audio analysis with minimal performance impact.',
    solutions: [
      {
        icon: 'analytics',
        title: 'Audio Analysis',
        description: 'Created lightweight machine learning models optimized for real-time audio processing in browsers.'
      },
      {
        icon: 'speed',
        title: 'Performance Optimization',
        description: 'Implemented efficient audio processing pipeline with minimal CPU and memory footprint.'
      }
    ],
    results: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Processing Time', value: '<500ms' },
      { label: 'User Rating', value: '4.7/5' }
    ],
    github: 'https://github.com/userkace/true-voice',
    site: 'https://truevoice-web.onrender.com/'
  },
  {
    id: 'legacy-ai',
    title: 'Legacy AI',
    category: ProjectCategory.AI_ML,
    description: 'A react SaaS chatbot for TikTok Live creators.',
    image: '/images/projects/legacy-ai.webp',
    tags: ['React', 'Node.js', 'OpenAI API'],
    year: '2025',
    role: ['Full-Stack Developer'],
    timeline: '16 Weeks',
    overview: 'AI-powered chatbot platform designed specifically for TikTok Live creators to enhance audience engagement.',
    challenge: 'Building real-time chat functionality with AI integration that can handle high-volume interactions.',
    solutions: [
      {
        icon: 'chat',
        title: 'Real-time Chat',
        description: 'Built scalable WebSocket infrastructure for high-volume live chat interactions with AI integration.'
      },
      {
        icon: 'smart_toy',
        title: 'AI Integration',
        description: 'Implemented intelligent response system with OpenAI API for contextual conversation handling.'
      }
    ],
    results: [
      { label: 'Active Users', value: '500+' },
      { label: 'Response Time', value: '<100ms' },
      { label: 'Engagement Rate', value: '+250%' }
    ],
    github: 'https://github.com/userkace/legacy-ai',
    site: 'https://legacy-ai-alpha.vercel.app'
  },
  {
    id: 'neurorite',
    title: 'Neurorite',
    category: ProjectCategory.MOBILE,
    description: 'A flutter made application for note-taking.',
    image: '/images/projects/neurorite-app.webp',
    tags: ['Flutter', 'Dart', 'Firebase'],
    year: '2024',
    role: ['Mobile Developer'],
    timeline: '10 Weeks',
    overview: 'Cross-platform note-taking application with intelligent organization and synchronization features.',
    challenge: 'Creating a seamless experience across Android, Web, and PWA platforms with consistent performance.',
    solutions: [
      {
        icon: 'sync',
        title: 'Cross-Platform Sync',
        description: 'Leveraged Flutter\'s unified framework with Firebase backend for seamless real-time synchronization.'
      },
      {
        icon: 'phone_android',
        title: 'Mobile Optimization',
        description: 'Optimized performance across Android, Web, and PWA platforms with consistent user experience.'
      }
    ],
    results: [
      { label: 'Platform Support', value: '3' },
      { label: 'Sync Speed', value: '<1s' },
      { label: 'User Retention', value: '85%' }
    ],
    github: 'https://github.com/userkace/neurorite',
    site: 'https://neurorite.pages.dev/'
  },
    {
    id: 'cpu-flow',
    title: 'CPU Flow',
    category: ProjectCategory.SIMULATION,
    description: 'A web application to simulate and visualize CPU scheduling algorithms.',
    image: '/images/projects/cpu-flow.webp',
    tags: ['React', 'JavaScript', 'CSS', 'Web App'],
    year: '2025',
    role: ['Sole Developer'],
    timeline: '6 Weeks',
    overview: 'CPU Flow is an interactive web application designed to simulate and visualize CPU scheduling algorithms, specifically Shortest Remaining Time (SRT) and Round Robin (RR). It serves as an educational tool for understanding operating system process management.',
    challenge: 'Creating accurate visual representations of complex scheduling algorithms while maintaining an intuitive user interface that clearly displays Gantt charts and performance metrics.',
    solutions: [
      {
        icon: 'code',
        title: 'Algorithm Implementation',
        description: 'Built accurate SRT and Round Robin scheduling algorithms with real-time process queue management and context switching visualization.'
      },
      {
        icon: 'insights',
        title: 'Performance Analytics',
        description: 'Developed comprehensive metrics dashboard showing waiting time, turnaround time, and CPU utilization with interactive Gantt charts.'
      }
    ],
    results: [
      { label: 'Algorithms Supported', value: '2' },
      { label: 'Visualization Accuracy', value: '100%' },
      { label: 'User Engagement', value: '85%' }
    ],
    github: 'https://github.com/userkace/cpu-flow',
    site: 'https://cpu-flow.pages.dev/'
  },
  {
    id: 'qr-website',
    title: 'QR Maker',
    category: ProjectCategory.WEB_APP,
    description: 'Free online QR code maker.',
    image: '/images/projects/qr-website.webp',
    tags: ['React', 'QR Code API', 'PWA'],
    year: '2024',
    role: ['Sole Developer'],
    timeline: '2 Weeks',
    overview: 'Simple and efficient QR code generator with multiple customization options and instant download.',
    challenge: 'Creating a fast, reliable service with minimal dependencies and maximum accessibility.',
    solutions: [
      {
        icon: 'qr_code',
        title: 'QR Generation',
        description: 'Built lightweight PWA with client-side QR code generation and instant download capabilities.'
      },
      {
        icon: 'phone_iphone',
        title: 'Mobile Optimization',
        description: 'Implemented progressive enhancement with offline support and responsive design across devices.'
      }
    ],
    results: [
      { label: 'Daily Users', value: '1000+' },
      { label: 'Generation Speed', value: '<100ms' },
      { label: 'PWA Score', value: '96/100' }
    ],
    github: 'https://github.com/userkace/qr',
    site: 'https://qr.kace.dev'
  },
  {
    id: 'film-website',
    title: 'Film',
    category: ProjectCategory.WEB_APP,
    description: 'Free online streaming website.',
    image: '/images/projects/film-website.webp',
    tags: ['React', 'Video.js', 'PWA'],
    year: '2024',
    role: ['Full-Stack Developer'],
    timeline: '4 Weeks',
    overview: 'Open-source streaming platform with support for multiple video formats and adaptive streaming.',
    challenge: 'Building a streaming solution that works across devices with minimal buffering.',
    solutions: [
      {
        icon: 'video_library',
        title: 'Streaming Technology',
        description: 'Implemented adaptive bitrate streaming with Video.js for seamless video playback across devices.'
      },
      {
        icon: 'download',
        title: 'Offline Support',
        description: 'Built PWA capabilities with offline video caching and progressive enhancement features.'
      }
    ],
    results: [
      { label: 'Buffer Reduction', value: '70%' },
      { label: 'Cross-platform', value: '100%' },
      { label: 'Open Source Stars', value: '200+' }
    ],
    github: 'https://github.com/userkace/film.kace.dev',
    site: 'https://film.kace.dev'
  },
  {
    id: 'packaged',
    title: 'Packaged',
    category: ProjectCategory.MOBILE,
    description: 'Android package name viewer.',
    image: '/images/projects/packaged-app.webp',
    tags: ['Kotlin', 'Android SDK', 'Package Inspector'],
    year: '2023',
    role: ['Android Developer'],
    timeline: '3 Weeks',
    overview: 'Utility app for Android developers to inspect and analyze package information of installed applications.',
    challenge: 'Creating a comprehensive package inspector with detailed metadata extraction.',
    solutions: [
      {
        icon: 'apps',
        title: 'Package Inspection',
        description: 'Developed comprehensive Android package inspector with detailed metadata extraction and analysis.'
      },
      {
        icon: 'data_object',
        title: 'System Integration',
        description: 'Built deep system integration with native Android APIs for thorough package information access.'
      }
    ],
    results: [
      { label: 'Downloads', value: '10K+' },
      { label: 'Rating', value: '4.5/5' },
      { label: 'Features', value: '25+' }
    ],
    github: 'https://github.com/userkace/packaged'
  },
  {
    id: 'mme-app',
    title: 'm.me Link Maker',
    category: ProjectCategory.WEB_APP,
    description: 'A meta facebook messenger m.me link generator.',
    image: '/images/projects/mme-app.webp',
    tags: ['React', 'Facebook API', 'PWA'],
    year: '2024',
    role: ['Full-Stack Developer'],
    timeline: '1 Week',
    overview: 'Simple tool for generating Facebook Messenger links with customizable parameters and tracking.',
    challenge: 'Creating a straightforward utility with comprehensive customization options.',
    solutions: [
      {
        icon: 'link',
        title: 'Link Generation',
        description: 'Built minimal interface with instant preview and clipboard functionality for Facebook Messenger links.'
      },
      {
        icon: 'settings',
        title: 'Customization',
        description: 'Implemented comprehensive parameter customization with real-time link preview and validation.'
      }
    ],
    results: [
      { label: 'Links Generated', value: '50K+' },
      { label: 'Conversion Rate', value: '89%' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ],
    github: 'https://github.com/userkace/m.me',
    site: 'https://userkace.github.io/m.me/'
  },
  {
    id: 'loop-website',
    title: 'LOOP Website',
    category: ProjectCategory.AGENCY,
    description: 'LOOP SOC HAU Website.',
    image: '/images/projects/loop-website.webp',
    tags: ['React', 'Tailwind', 'CMS'],
    year: '2023',
    role: ['Web Developer'],
    timeline: '6 Weeks',
    overview: 'Official website for LOOP Student Organization at Holy Angel University with dynamic content management.',
    challenge: 'Building a scalable platform for student organization with frequent content updates.',
    solutions: [
      {
        icon: 'cms',
        title: 'Content Management',
        description: 'Integrated headless CMS for dynamic content updates with user-friendly admin interface.'
      },
      {
        icon: 'speed',
        title: 'Performance Optimization',
        description: 'Optimized page load times with responsive design and modern web performance techniques.'
      }
    ],
    results: [
      { label: 'Page Speed', value: '95/100' },
      { label: 'Content Updates', value: '50+/month' },
      { label: 'Mobile Traffic', value: '78%' }
    ],
    github: 'https://github.com/userkace/loop-hau'
  },
  {
    id: 'gdsc-website',
    title: 'GDSC Website',
    category: ProjectCategory.AGENCY,
    description: 'GDSC-HAU Website.',
    image: '/images/projects/gdsc-website.webp',
    tags: ['React', 'Google Cloud', 'Firebase'],
    year: '2023',
    role: ['Web Developer'],
    timeline: '8 Weeks',
    overview: 'Google Developer Student Club website featuring event management and member resources.',
    challenge: 'Integrating multiple Google services while maintaining optimal performance.',
    solutions: [
      {
        icon: 'cloud',
        title: 'Cloud Integration',
        description: 'Leveraged Google Cloud ecosystem with Firebase for real-time features and authentication.'
      },
      {
        icon: 'event',
        title: 'Event Management',
        description: 'Built comprehensive event registration system with member resources and engagement tracking.'
      }
    ],
    results: [
      { label: 'Event Registrations', value: '500+' },
      { label: 'Member Engagement', value: '85%' },
      { label: 'Cloud Performance', value: '99.9%' }
    ],
    github: 'https://github.com/userkace/gdsc-hau'
  }
];
