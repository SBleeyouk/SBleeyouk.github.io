// projectData.js
const projects = [
    {
      id: 1,
      title: 'Mujigae (Rainbow)',
      shortDescription: 'GenAI powered personalized emotion learning system for autism spectrum disorder(ASD) children.',
      year: '2024',
      tag: ['AI', 'Education', 'Interface'],
      pdfLink: null,
      gitLink: 'https://github.com/SBleeyouk/sixsense',
      thumbnail: '/src/thumbnail-01.gif ',
      thumbnailQeustion: '/src/thumbnail-01q.png',
      question: 'How can we support individuals with autism disorder for training emotional communication?',
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
        {
          label: 'Emotion Word Extraction & Generation',
          description: 'Emotional vocabulary is extracted from teacher-prepared notes or diaries co-written with caregivers. The system generates context-appropriate images and music. We built a custom dataset of emotional vocabulary, situational descriptions, and corresponding music for special education, fine-tuning Meta MusicGen for this purpose.'
        },
        {
          label: 'Real-Time Facial Expression Mapping',
          description: "The system maps the child’s facial expressions to a 3D character’s expressions in real time. Using a hybrid model of ResNet and Vision Transformer (ViT) trained on the RAF-DB dataset, it enables accurate expression recognition. For facial landmark extraction, High-Resolution Networks (HRNets) trained on the HFLW dataset were used. Expression similarity is calculated through the squared sum of differences between teacher character and user landmarks, while gaze tracking monitors focus to adjust training speed and difficulty.",
        },
        {
          label: 'Personalized Curriculum & Feedback',
          description: 'Based on learned data, the system provides a personalized curriculum, tracking progress and offering tailored feedback on emotional training outcomes.'
        },
        {
          label: 'Future Work',
          description: 'In collaboration with special schools and therapy centers, we fine-tune training parameters based on expert diagnostics. The system is further expanded to integrate with personal robots, fostering emotional communication research.'
        }
      ],
      motivationSrc: [
        'https://www.youtube.com/embed/NLXxJixbfCA?si=E3sNHadrIll1lJC5',
        '/src/prj01-detail-01.png',
      ],
      approachSrc: [
      ],
      additionalSrc: [
      ],
      roles: ['Team Lead', 'AI Engineer for fine-tuning Language-Music Generation Model (Meta MusicGen)', 'Full-Stack Web Developer', 'Researcher conducting formative studies and system evaluations in a special school'],
      credits:['Jimin Yoon', 'Jeunghyun Kim', 'Sumin Kim', 'Advised by Jeonguk Ha'],
      awards:['National Capstone Design Awards, National Research Foundation&Ministry of Education','IITP President’s Award, GenAI SW Competition, Ministry of Science and ICT', 'Grand Award, Sogang Integrated Technology & Engineering Contest'],
      funded:['National Research Foundation'],
    },
    {
      id: 2,
      title: 'Franklin',
      shortDescription: 'Gender Debiased Korean Fairytale AI Author',
      year: '2022',
      tag: ['AI', 'Social Justice', 'Interface'],
      pdfLink: ['http://journal.dcs.or.kr/xml/37344/37344.pdf'],
      thumbnail: '/src/thumbnail-02.png',
      thumbnailQeustion: '/src/thumbnail-02q.png',
      question: 'Why all fairytale girls want party, while all fairytale boys fight with dragons? ',
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
      ],
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
      roles: ['Led research on mitigating gender bias in large Korean GPT models', 'Developed debiased word embeddings and data augmentation pipeline', 'Conducted fairness evaluation research', 'Full-Stack Developer', 'Designed interaction and system architecture for an AI co-authoring platform'],
      credits:['Jiin An','Yewon Jang','Advised by Dasaem Jeong'],
      awards:['Excellence Award, HCI Korea Creative Award Capstone Project','Grand Award, Sogang Integrated Technology & Engineering Contest'],
      funded:['Smilegate Membership for AI', 'National Research Foundation'],
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
        motivation: [{
          label: '',
          description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
        }
        ],
        approach: [
          {
            label: 'Collaborative Framework',
            description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
          },
        ],
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
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
      ],
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
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
      ],
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
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
      ],
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
      motivation: [{
        label: '',
        description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
      }
      ],
      approach: [
        {
          label: 'Collaborative Framework',
          description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
        },
      ],
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
    motivation: [{
      label: '',
      description: 'Globally, 1 in 37 people is on the autism spectrum, and in South Korea, the registered population with autism spectrum disorder (ASD) has doubled over the past decade. Despite this, the average age of death for individuals with ASD in Korea is only 23.8 years, with suicide being the leading cause—often due to social isolation.\n Children with autism struggle with expressing and communicating emotions, which can lead to social and behavioral issues (Mayes et al., 2011) and inappropriate behaviors like self-harm and aggression (Folstein, 2012). However, emotional training facilities are concentrated in metropolitan areas, with prohibitively high costs of $1,500–$3,000 per month. Teachers in special education schools also highlight the difficulty of personalizing emotion training into structured curriculums, often limiting efforts to rote memorization of emotional vocabulary.\nTo address this issue, we developed <Mujigae>, an AI agent for daily, home-based emotional training tailored to children’s routines. <Mujigae> aims to improve emotional communication skills in children with autism through immersive learning environments and personalized curriculums. Additionally, by collecting biometric data, the system facilitates better communication between individuals with autism and society.'
    }
    ],
    approach: [
      {
        label: 'Collaborative Framework',
        description: 'We applied the Developmental Individual Differences Relationship (DIR) therapy method, widely used in autism emotional therapy, through collaboration with special education teachers and pediatric psychiatrists'
      },
    ],
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
  