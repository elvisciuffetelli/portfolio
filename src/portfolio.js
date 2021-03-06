/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const animatedIllustrations = {
  greeting: false, // set to false to use static SVG
  skills: false, // set to false to use static SVG
  contact: false // set to false to use static SVG
};

const greeting = {
  username: "Elvis Ciuffetelli",
  title: "Hi all, my name is Elvis Ciuffetelli",
  subTitle: emoji("A passionate Software Developer from Italy 🇮🇹"),
  body:
    "I build Web and Mobile applications with JavaScript | React.js | Node.js | React Native and other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1Oulvd6urZJrQ6Ilmmz3c_HJ6ukWNm1HD/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/elvisciuffetelli",
  linkedin: "https://www.linkedin.com/in/elvis-ciuffetelli/",
  gmail: "ciuffetellielvis@gmail.com",
  twitter: "https://twitter.com/e_ciuffetelli",
  instagram: "https://www.instagram.com/elvisciuffetelli/",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Transform features into code"),
    emoji("⚡ CI/CD with third part services like Azure DevOps")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Università dell'Aquila",
      //logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Accademia di Belle Arti L'Aquila",
      logo: require("./assets/images/abaqLogo.png"),
      subHeader: "Master degree",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Front-End developer",
      company: "Avanade",
      companylogo: require("./assets/images/avanadeLogo.png"),
      date: "December 2020 – Present",
      desc: "React developer / Front-End developer",
      descBullets: [
        "Implementing client’s features in web and mobile applications with an eye to the UI and the UX",
        "Technologies: React, Sass, Javascript, Redux, Thunk, Jest"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Aesys",
      companylogo: require("./assets/images/aesysLogo.png"),
      date: "March 2019 – November 2020",
      desc:
        "Web and mobile front-end developer, specialized in the React ecosystem and Javascript language",
      descBullets: [
        "Technologies: React Native, React, Sass, Javascript, Redux"
      ]
    },
    {
      role: "Front-End Developer",
      company: "ThinkOpen",
      companylogo: require("./assets/images/thinkopenLogo.png"),
      date: "July 2018 – February 2019",
      desc: "Front-End and React Native developer",
      descBullets: ["Technologies: React Native, Javascript, RxJs"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Selected Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/illimityLogo.webp"),
      projectName: "Illimity Bank",
      projectDesc: "Illimity home banking web and mobile apps",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.illimitybank.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-eni.webp"),
      projectName: "Eni Enhanced Operators",
      projectDesc:
        "Web app built in ReactJs used by Eni technicians to control their facilities in Italy",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.eni.com"
        }
      ]
    },
    {
      image: require("./assets/images/smeg.webp"),
      projectName: "Smeg Consumers",
      projectDesc:
        "Smeg Consumer mobile app, developed for Apple and Android devices using React Native",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.smeg.it/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some articles I wrote to clarify concepts to me and to other people.",

  blogs: [
    /*   {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }, */
    {
      url:
        "https://elvisciuffetelli.medium.com/javascript-event-loop-6e882fe95587",
      title: "Javascript Event Loop",
      description:
        "Understanding one of the most important topics about JavaScript"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to contact me if you like, my Inbox is open for all.",
  //number: "+92-3243454077",
  email_address: "ciuffetellielvis@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "e_ciuffetelli", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  animatedIllustrations,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
