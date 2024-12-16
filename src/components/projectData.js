// projectData.js
const projects = [
    {
      id: 1,
      title: 'Mujiage (Rainbow)',
      shortDescription: 'Personalized Emotion Learning System for ASD',
      year: '2024',
      tag: ['AI', 'Education', 'Interface'],
      pdfLink: '/docs/rainbow.pdf',
      thumbnail: '/src/thumbnail-01.gif ',
      thumbnailQeustion: '/src/thumbnail-01q.png',
      mainImg: '/src/mainImg1.png',
      mainVideo: null, // No video in this project
      question: 'How can we support individuals with autism disorder for training emotional communication?',
      motivation: 'This project aims to address emotional communication challenges for individuals with ASD.',
      approach: 'We used AI-driven emotion recognition algorithms combined with an interactive interface.',
      motivationSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
      ],
      approachSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
      ],
      roles: ['Team Lead', 'AI Engineer for Langauge-Music Gen Model','Web Fullstack Developer', 'Researcher'],
      credits:['Jimin Yoon', 'Jeunghyun Kim', 'Sumin Kim', 'Advised by Jeonguk Ha'],
      awards:['National Capstone Award', 'National SW Competition', 'Sogang Integrated Technology&Engineering Contest'],
      funded:['National Research Fund'],
    },
    {
      id: 2,
      title: 'Franklin',
      shortDescription: 'Gender Debiased Korean Fairytale Generator',
      year: '2022',
      tag: ['AI', 'Social Justice'],
      pdfLink: null,
      thumbnail: '/src/thumbnail-02.png',
      thumbnailQeustion: '/src/thumbnail-02q.png',
      mainImg: '/src/mainImg2.png',
      mainVideo: '/src/mainVideo2.mp4',
      question: 'Why all fairytale girls want party, while all fairytale boys fight with dragons? ',
      motivation: 'The project was inspired by the need to tackle gender stereotypes in children’s literature.',
      approach: 'We developed a fairytale generator using a language model fine-tuned for debiasing tasks.',
      motivationSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
      ],
      approachSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
      ],
      roles: '',
      credits:'',
      awards:'',
      funded:'',
    },
    {
        id: 3,
        title: 'Fake the Deepfake',
        shortDescription: 'System to support activists on tracking deepfake sexual crimes in Telegram',
        year: '2024',
        tag: ['AI', 'Social Justice', 'Interface', 'Research','Individual'],
        pdfLink: null,
        thumbnail: '/src/thumbnail4.png',
        thumbnailQeustion: '/src/thumbnail-03q.png',
        mainImg: '/src/mainImg4.png',
        mainVideo: 'null',
        question: 'How can we support activists in dismantling the deepfake sexual crime cartel, while reducing their PTSD?',
        motivation: "From the 2020 Nth Room case to the 2024 Telegram deepfake sexual crimes, women in South Korea have been increasingly targeted by anonymous perpetrators who use their personal information to generate and share deepfake pornography in Telegram chat rooms. This issue extends beyond digital harassment, forming a broader criminal cartel that commodifies women to facilitate further illegal activities, including real-world exploitation, drug trafficking, and illegal gambling. Existing efforts to combat these crimes have focused on tracking deepfake models or analyzing sexually exploitative messages, which are often ineffective due to Telegram's security features.",
        approach: "This project explores how automated tools that incorporate activists undercover tracking strategies can support activists and police investigators in long-term undercover operations targeting Telegram's digital sexual crime cartels, while also mitigating PTSD. The 'Fake the Deepfake Bot', a Telegram persona bot designed to automatically engage in conversations with perpetrators, gather evidence of crimes shared within chat rooms, and collect profile information of chat room participants. The system was designed based on interviews with three expert groups: activists engaged in tracking and supporting victims, police investigators with experience in digital sexual crimes and international Telegram investigations, and legal professionals assisting victims and providing insights into the evidence required for prosecuting offenders.",
        motivationSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
        ],
        approachSrc: [
        '/src/detailImg3.png',
        '/src/detailVideo2.mp4',
        '/src/detailImg4.png',
        ],
        roles:['Conducting formative study', 'Desinging system', 'Developing system'],
        credits:['Individual Project'],
        awards:'',
        funded:'',
    },
    {
      id: 4,
      title: 'Testimony Continues',
      shortDescription: 'Media art to gather civic efforts on remembering unrecorded sexual slavery victims from the Japanese Army',
      year: '2023',
      tag: ['AI', 'Social Justice', 'Media Art'],
      pdfLink: null,
      thumbnail: '/src/thumbnail-03.gif',
      thumbnailQeustion: '/src/thumbnail-04q.png',
      mainImg: '/src/thumbnail-03.gif',
      mainVideo: 'null',
      question: "Can AI preserve and amplify civic society's collective memory of Japanese military sexual slavery, after the last survivor is gone?",
      motivation: "",
      approach: "",
      motivationSrc: [
      '/src/detailImg3.png',
      'https://www.youtube.com/embed/XdfdZNwphRo?si=aMBHZoXo9RwCujPW',
      '/src/detailImg4.png',
      ],
      approachSrc: [
      '/src/detailImg3.png',,
      '/src/detailImg4.png',
      ],
      roles:['Conducting formative study', 'Desinging system', 'Developing system'],
      credits:['Individual Project'],
      awards:'',
      funded:'',
  },
    {
      id: 5,
      title: 'Find Me',
      shortDescription: 'GPS based XR game on the sociopolitical sites.',
      year: '2022',
      tag: ['AI', 'Social Justice', 'Media Art'],
      pdfLink: null,
      thumbnail: '/src/thumbnail6.png',
      thumbnailQeustion: '/src/thumbnail-05q.png',
      mainImg: '/src/mainImg4.png',
      mainVideo: 'null',
      question: 'Why do future humanoid robots mimic stereotypical feminine traits, and how can we reimagine them through a queering perspective?',
      motivation: "From the 2020 Nth Room case to the 2024 Telegram deepfake sexual crimes, women in South Korea have been increasingly targeted by anonymous perpetrators who use their personal information to generate and share deepfake pornography in Telegram chat rooms. This issue extends beyond digital harassment, forming a broader criminal cartel that commodifies women to facilitate further illegal activities, including real-world exploitation, drug trafficking, and illegal gambling. Existing efforts to combat these crimes have focused on tracking deepfake models or analyzing sexually exploitative messages, which are often ineffective due to Telegram's security features.",
      approach: "This project explores how automated tools that incorporate activists undercover tracking strategies can support activists and police investigators in long-term undercover operations targeting Telegram's digital sexual crime cartels, while also mitigating PTSD. The 'Fake the Deepfake Bot', a Telegram persona bot designed to automatically engage in conversations with perpetrators, gather evidence of crimes shared within chat rooms, and collect profile information of chat room participants. The system was designed based on interviews with three expert groups: activists engaged in tracking and supporting victims, police investigators with experience in digital sexual crimes and international Telegram investigations, and legal professionals assisting victims and providing insights into the evidence required for prosecuting offenders.",
      motivationSrc: [
      '/src/detailImg3.png',
      '/src/detailVideo2.mp4',
      '/src/detailImg4.png',
      ],
      approachSrc: [
      '/src/detailImg3.png',
      '/src/detailVideo2.mp4',
      '/src/detailImg4.png',
      ],
      roles:['Conducting formative study', 'Desinging system', 'Developing system'],
      credits:['Individual Project'],
      awards:'',
      funded:'',
    },
    {
      id: 6,
      title: 'Guardian of Makers',
      shortDescription: 'Safe AI Guidance for young makers to learn to fail and experiment more',
      year: '2024',
      tag: ['AI', 'Education', 'Interface'],
      pdfLink: 'https://github.com/SBleeyouk/guardian-of-makers?tab=readme-ov-file',
      thumbnail: '/src/thumbnail5.gif',
      thumbnailQeustion: '/src/thumbnail-06q.png',
      mainImg: 'null',
      mainVideo: 'null',
      question: "How can we design systems that encourage young makers to embrace failure and experiment freely?",
      approach: "This project explores how automated tools that incorporate activists undercover tracking strategies can support activists and police investigators in long-term undercover operations targeting Telegram's digital sexual crime cartels, while also mitigating PTSD. The 'Fake the Deepfake Bot', a Telegram persona bot designed to automatically engage in conversations with perpetrators, gather evidence of crimes shared within chat rooms, and collect profile information of chat room participants. The system was designed based on interviews with three expert groups: activists engaged in tracking and supporting victims, police investigators with experience in digital sexual crimes and international Telegram investigations, and legal professionals assisting victims and providing insights into the evidence required for prosecuting offenders.",
      motivationSrc: [
      'https://player.vimeo.com/video/942240615?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
      '/src/detailImg4.png',
      ],
      approachSrc: [
      ],
      roles:['Desinging system', 'Fullstack developer'],
      credits:['Chanu Lee'],
      awards:'',
      funded:['Individual Project'],
    },
    {
      id: 7,
      title: 'the dOXr',
      shortDescription: 'Microsoft Hololens using XR exhibition',
      year: '2022',
      tag: ['Social Justice', 'Media Art'],
      pdfLink: null,
      thumbnail: '/src/thumbnail-07.gif',
      thumbnailQeustion: '/src/thumbnail-07q.png',
      mainImg: '/src/mainImg4.png',
      mainVideo: 'null',
      question: 'How can XR-augmented reality reveal deeper truths about our lives?',
      motivation: "From the 2020 Nth Room case to the 2024 Telegram deepfake sexual crimes, women in South Korea have been increasingly targeted by anonymous perpetrators who use their personal information to generate and share deepfake pornography in Telegram chat rooms. This issue extends beyond digital harassment, forming a broader criminal cartel that commodifies women to facilitate further illegal activities, including real-world exploitation, drug trafficking, and illegal gambling. Existing efforts to combat these crimes have focused on tracking deepfake models or analyzing sexually exploitative messages, which are often ineffective due to Telegram's security features.",
      approach: "This project explores how automated tools that incorporate activists undercover tracking strategies can support activists and police investigators in long-term undercover operations targeting Telegram's digital sexual crime cartels, while also mitigating PTSD. The 'Fake the Deepfake Bot', a Telegram persona bot designed to automatically engage in conversations with perpetrators, gather evidence of crimes shared within chat rooms, and collect profile information of chat room participants. The system was designed based on interviews with three expert groups: activists engaged in tracking and supporting victims, police investigators with experience in digital sexual crimes and international Telegram investigations, and legal professionals assisting victims and providing insights into the evidence required for prosecuting offenders.",
      motivationSrc: [
      '/src/detailImg3.png',
      '/src/detailVideo2.mp4',
      '/src/detailImg4.png',
      ],
      approachSrc: [
      '/src/detailImg3.png',
      '/src/detailVideo2.mp4',
      '/src/detailImg4.png',
      ],
      roles:['Conducting formative study', 'Desinging system', 'Developing system'],
      credits:['Individual Project'],
      awards:'',
      funded:'',
  },
  {
    id: 8,
    title: 'Video Digest: Personalizing Instructional Video Viewing',
    shortDescription: 'KIXLAB undergraduate internship project',
    year: '2024',
    tag: ['AI', 'Interface', 'Education', 'Research'],
    pdfLink: null,
    thumbnail: '/src/thumbnail-08.png',
    thumbnailQeustion: '/src/thumbnail-08q.png',
    mainImg: '/src/thumbnail-08.png',
    mainVideo: 'null',
    question: 'How can we design personalized learning paths for learners in multi-video transitioning environments?',
    motivation: "From the 2020 Nth Room case to the 2024 Telegram deepfake sexual crimes, women in South Korea have been increasingly targeted by anonymous perpetrators who use their personal information to generate and share deepfake pornography in Telegram chat rooms. This issue extends beyond digital harassment, forming a broader criminal cartel that commodifies women to facilitate further illegal activities, including real-world exploitation, drug trafficking, and illegal gambling. Existing efforts to combat these crimes have focused on tracking deepfake models or analyzing sexually exploitative messages, which are often ineffective due to Telegram's security features.",
    approach: "This project explores how automated tools that incorporate activists undercover tracking strategies can support activists and police investigators in long-term undercover operations targeting Telegram's digital sexual crime cartels, while also mitigating PTSD. The 'Fake the Deepfake Bot', a Telegram persona bot designed to automatically engage in conversations with perpetrators, gather evidence of crimes shared within chat rooms, and collect profile information of chat room participants. The system was designed based on interviews with three expert groups: activists engaged in tracking and supporting victims, police investigators with experience in digital sexual crimes and international Telegram investigations, and legal professionals assisting victims and providing insights into the evidence required for prosecuting offenders.",
    motivationSrc: [
    '/src/detailImg3.png',
    '/src/detailVideo2.mp4',
    '/src/detailImg4.png',
    ],
    approachSrc: [
    '/src/detailImg3.png',
    '/src/detailVideo2.mp4',
    '/src/detailImg4.png',
    ],
    roles:['Conducting formative study', 'Desinging system', 'Developing system'],
    credits:['Individual Project'],
    awards:'',
    funded:'',
},
  ];

  
  export const getProjectById = (id) => projects.find((project) => project.id === id);
  
  export default projects;
  