const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adrian Kasito | Portfolio",
  description:
    "A passionate data scientist with a thirst for knowledge and a love of all things data.",
  og: {
    title: "Adrian Kasito Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Adrian Kasito",
  logo_name: "Adrian Kasito",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/adriankasito",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://linkedin.com/in/adrian-kasito-8b22191aa",
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: {
        color: "white",
      },
      profileLink: "https://medium.com/@adriankc910",
    },
    {
      siteName: "Twitter",
      iconifyClassname: "simple-icons:twitter",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://twitter.com/adriankasito?lang=en",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Scientist",
      fileName: "DataScienceImg",
      skills: [
        "📊 Causal Inference: Statistically uncovering causal links between variables for informed decisions.",
        "📈 Time Series Analysis: Analyzing and forecasting time series data for strategic insights.",
        "🧠 Deep Learning: Mastering intricate deep learning for innovation in NLP and image recognition.",
        "💼 Data Manipulation: Ensuring data integrity and meaningful insights through expert preprocessing.",
        "📈📊 A/B Testing: Optimizing strategies and product performance through rigorous A/B tests."
        ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I employ a diverse array of cutting-edge technology tools in my projects, with a particular focus on creating Data Science projects, infusing them with analytics and statistics, and deploying them as web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Rshiny Analysis Dashboard",
      img_path: "rshiny.gif",
      description:
        "A dashboard for vehicle collision analysis using Rshiny",
      tags: [
        {
          lang: "r programming",
          color: "#004782",
        },
        {
          lang: "javascript",
          color: "#820032",
        },
        {
          lang: "html",
          color: "#00a100",
        },
        {
          lang: "shiny",
          color: "#ff4b4b",
        },
        {
          lang: "css",
          color: "#3c0095",
        },
      ],
      link: "https://u5xj4l-adrian-kasito.shinyapps.io/Rshiny-MotorVehicleCollisions/",
      code: "https://github.com/adriankasito/Rshiny-Vehicle-Collisions-Dasboard",
      linkcolor: "white",
    },

    {
      title: "Volatility Forecasting In Microsoft By Minute",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "python",
          color: "red",
        },
        {
          lang: "arch_model",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "FastAPI",
          color: "#4257f5",
        },
        {
          lang: "sqlite3",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito/Volatility-Forecasting-In-Microsoft-Corporation-By-Minute",
      linkcolor: "white",
    },
    {
      title: "Streamlit Dashboard",
      img_path: "streamlit.png",
      description:
        "This Streamlit-based project provides an interactive dashboard for analyzing motor vehicle collisions in New York City",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "pydeck",
          color: "#3c0095",
        },
        {
          lang: "pandas",
          color: "#004782",
        },
        {
          lang: "plotly",
          color: "#ff4b4b",
        },
      ],
      link: "https://motor-vehicle-collisions-in-new-york.streamlit.app/",
      code: "https://github.com/adriankasito/Streamlit-Motor-Vehicle-Collisions-In-New-York-City",
      linkcolor: "white",
    },
    {
      title: "Nairobi Bus Ticket Sales Prediction Project",
      img_path: "news.gif",
      description:
        "The objective was to develop a predictive model that could estimate the number of tickets sold for different bus rides in Nairobi.",
      tags: [
        {
          lang: "python",
          color: "red",
        },
        {
          lang: "xgboost",
          color: "#ff4b4b",
        },
        {
          lang: "pandas",
          color: "#303030",
        },
        {
          lang: "sklearn",
          color: "#3c0095",
        },
        {
          lang: "seaborn",
          color: "#ff4b4b",
        },
        {
          lang: "ydata_profiling",
          color: "#3c0095",
        },

      ],
      link: "",
      code: "https://github.com/adriankasito/TotalEnergies-rEVolution-Hackathon---Optimized-EV-Charging-Points-in-Kampala",
      linkcolor: "white",
    },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    {
      title: "Image Classification With Convolutional Networks",
      img_path: "neural.gif",
      description:
        "An engaging project that utilizes convolutional neural networks in Keras for image classification.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "tensorflow",
          color: "#303030",
        },
        {
          lang: "keras",
          color: "#ff4b4b",
        },
        {
          lang: "cv2",
          color: "#051c61",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito/Interesting-Image-Classification-Convolutional-Networks-Keras-",
      linkcolor: "white",
    },
    {
      title: "Air-Quality-Prediction",
      img_path: "airquality.gif",
      description:
        "A forecasting model for the concentration of carbon monoxide [PT08.S1(CO) Level], a crucial indicator of air quality.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "flask",
          color: "#c47206",
        },
        {
          lang: "sklearn",
          color: "#ff4b4b",
        },
        {
          lang: "statsmodels",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "https://github.com/adriankasito/Air-Quality-Prediction",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "WHITE-MARE TECHNOLOGY LIMITED",
        date: "May 2021 - Present",
        content: [
          "Automated data analysis and report generation for game park recovery initiatives in Uganda using Excel and R.",
          "Collected, organized, and cleaned data for Murchison National Park and Queen Elizabeth National Park recovery efforts",
          "Applied statistical methods to interpret data and create impactful visualizations.",
          "Undertook machine learning projects to address park recovery challenges",
        ],
      },
      {
        title: "Head, Compliance & Quality Assurance",
        subtitle: "WHITE-MARE TECHNOLOGY LIMITED",
        date: "January 2023 - Present",
        content: [
          "Overseeing compliance and quality assurance processes.",
          "Developing data-driven quality improvement initiatives.",
      
        ],
      },
      {
        title: "Part-time Entry Level Data Analyst",
        subtitle: "Ministry of Education, Science, Technology & Sports",
        date: "August 2018 - December 2021",
        content: [
          "Conducted data analysis and provided insights for education policy and planning",
          "Developed data dashboards to monitor key performance indicators",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "MSc in Data Science",
          subtitle: "University of East London, United Kingdom",
          date: "2021 - 2023",
          content: ["Masters with Distinctions"],
        },
        {
          title: "Bachelor of Statistics",
          subtitle: "Makerere University, Kampala, Uganda",
          date: "2015 - 2019",
          
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#32/350 in TotalEnergies rEVolution Hackathon",
            
          ],
        },
        
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Statistician",
          subtitle: "Global Health Infectious Disease Modeling and Hazardous Pesticide Research Global Health, Uganda",
          content: [
            "Contributed as a statistician in global health projects with the SEIRS model in infectious disease using Berkeley Madonna, R, and Python using deterministic & probabilistic modeling",
            "Volunteered in hazardous pesticide research analyzing cross-sector data for hazardous pesticides identification using data from the police, hospitals, and forensic laboratory",
          ],
        },
        {
          title: "Real-Time Minute-Level Volatility Prediction, FastAPI and Open API for Microsoft",
          subtitle: "https://github.com/adriankasito/Volatility-Forecasting-In-Microsoft-Corporation- By-Minute",
          content: [
            "Engineered an advanced FastAPI-based solution for real-time access to Microsoft's financial data",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Applied Data Science Lab",
      subtitle: "WorldQuant University",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/c7bc0f11-a6a5-49a1-86c2-f7cb447fbd21/public_url",
      alt_name: "WorldQuant University",
      color_code: "#000000",
    },
    {
      title: "Applied Data Science with Python Specialization",
      subtitle: "Coursera",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/96N4APY5VKP7",
      alt_name: "Coursera",
      color_code: "#000000",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "Andrew Ng",
      logo_path: "problem-01.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/7X7HQUNEQRFZ",
      alt_name: "Andrew Ng",
      color_code: "#000000",
    },
    {
      title: "IT Project Management",
      subtitle: "Unicaf University",
      logo_path: "python-01.png",
      certificate_link: "",
      alt_name: "Unicaf University",
      color_code: "#000000",
    },
    {
      title: "IBM Applied AI Professional Certificate",
      subtitle: "IBM",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/FFFM9VR6RVA7",
      alt_name: "IBM",
      color_code: "#000000",
    },
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "jpg",
    description:
      "I'm readily accessible on various social media platforms, and you can expect a response within 24 hours. Feel free to reach out for assistance with Data Science, Machine Learning, Statistics, and Data Analysis.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kampala-Uganda",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+256 701243667",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adriankasito",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adriankasito/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:adriankc910@gmail.com ",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
 
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
