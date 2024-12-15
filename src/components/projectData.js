// projectData.js
const projects = [
    {
      id: 1,
      title: 'Mujiage (Rainbow)',
      shortDescription: 'Personalized Emotion Learning System for ASD',
      year: '2024',
      tag: ['AI', 'Education', 'Interface'],
      pdfLink: '/docs/rainbow.pdf',
      thumbnail: '/src/thumbnail1.png',
      thumbnailQeustion: '/src/thumbnail1q.png',
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
      thumbnail: '/src/thumbnail2.png',
      thumbnailQeustion: '/src/thumbnail2q.png',
      mainImg: '/src/mainImg2.png',
      mainVideo: '/src/mainVideo2.mp4',
      question: 'How can we challenge gender bias in Korean fairytales?',
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
  ];
  
  export const getProjectById = (id) => projects.find((project) => project.id === id);
  
  export default projects;
  