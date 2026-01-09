// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Meet1590', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Meet1590/portfolio-archive','Meet1590/my-project', 'Meet1590/trading-bot', 'Meet1590/Portfolio', 'Meet1590/binary-signal-generator', 'Meet1590/Algorithms'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Meet', description: '', imageURL: '' },
  social: {
    linkedin: 'meet1590',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'meet3670patel@gmail.com',
  },
  resume: {
    fileUrl: //update this with your resume file url
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MLOps',
    'Deep Learning',
    'Pandas',
    'Numpy',
    'Scikit-learn',
    'Matplotlib',
    'Seaborn',
    'Plotly',
    'SciPy',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'OpenCV',
    'NLTK',
    'Spacy',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Apple Inc (through UL Solution)',
      position: 'Lab Engineer',
      from: 'September 2025',
      to: 'Present',
      companyLink: '',//add company url
      description: ["Automated manual testing workflows by developing Python scripts, reducing test cycle time by ~30% and improving repeatability across compliance processes.",
        "Designed and delivered a department-wide automation solution within 4 weeks, demonstrating the ability to rapidly prototype and deploy scalable internal tools.",
        "Integrated outputs from automated testing systems into structured datasets, enabling supervisors to make faster, data-informed operational decisions.",
        "Collaborated with cross-functional teams to embed automation into existing compliance workflows, improving consistency while maintaining regulatory standards.",
      ],
    },
    {
      company: 'UL Solutions',
      position: 'Lab Technician',
      from: 'May 2024',
      to: 'August 2025',
      companyLink: '', //add company url (linkedIn)
      description: ["Developed an automated data collection and analysis pipeline for device test results, reducing report generation time by ~20% and improving operational throughput",
        "Implemented Python-based validation scripts to enforce data quality checks, increasing result accuracy from ~90% to ~98%.",
        "Audited and transferred test data into client databases, reducing processing delays by ~20% while ensuring 100% regulatory compliance.",
        "Configured and adapted testing setups to meet changing technical and compliance requirements, demonstrating precision and reliability in regulated environments.",
      ],
    },
  ],
  certifications: [
    {
      name: 'Foundation in Financial Engineering',
      body: 'WorldQuant University',
      year: '2025',
      link: '',
    },
    {
      name: 'National Cadet Corps, India',
      body: 'Govt. of India',
      year: 'May 2022',
      link: '',
    },
  ],
  educations: [
    // {
    //   from: '2025',
    //   to:'continue',
    //   institution: 'WorldQuant University',
    //   degree: 'MSc in Financial Engineering',
    //   description: []//enter bullets here
    // },
    {
      from: '',
      to:'2024',
      institution: 'University of South Wales',
      degree: 'BSc (Hons) Computer Science',
      description: [
        "Built a strong applied computing foundation across system design, CI/CD implementation, web and application development, testing, and database design, with consistent emphasis on writing correct, maintainable software.",
        "Applied academic concepts to practical problem-solving through structured coursework, reinforcing disciplined engineering practices rather than theory in isolation.",
      ]//enter bullets here
    },
    {
      from: '2019',
      to: '2022',
      institution: 'The Maharaja Sayajirao University of Baroda',
      degree: 'Diploma in Information Technology',
      description: [
        "Developed a solid core in programming and problem-solving, covering Python, SQL, data structures, dynamic programming, OOP, and algorithmic thinking.",
        "Strengthened analytical reasoning by breaking down complex problems into structured solutions, building habits that later translated well into applied computing and automation work.",
      ]//enter bullets here
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  ////put portfolio url here
  footer: `Made with <a 
      class="text-primary" href=""
      target="_blank"
      rel="noreferrer"
    ></a>❤️`,

  enablePWA: true,
};

export default CONFIG;
