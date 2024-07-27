import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    React,
    threeJs,
    luckinCoffee,
    dashboard,
    blackDashboard,
    threejs,
    webdevelop,
    jquery,
    Bootstrap,
    sass,
    solarSystem
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdevelop,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "git",
      icon: jquery,
    },
    {
      name: "git",
      icon: Bootstrap,
    },
    {
      name: "sass",
      icon: sass,
    },

  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      icon: React,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
      ],
    },
    {
      title: "Web Developer",
      icon: webdevelop,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Three.js",
      icon: threeJs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using three.js , bulid website include 3D",
      ],
    },

  ];

  const projects = [
    {
      name: "Luckin Coffee",
      description:
        "The website displays products on the website and user can choose and purchase the product and they can pay online ",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "java script",
          color: "pink-text-gradient",
        },
        {
          name: "Jquery",
          color: "blue-text-gradient",
        },
      ],
      image: luckinCoffee,
      source_code_link: "https://github.com/Youhana-Gergis/Luckin_Coffee",
    },
    {
      name: "Dashboard",
      description:
        "A program that contains two section, the main section, which is after a login in website you will be taken to this page and there are the main elements,  and the client it displays all clients in the website",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/Youhana-Gergis/Dashboard.git",
    },
    {
      name: "black Dashboard",
      description:
        "A program that contains two section, the main section, which is after a login in website you will be taken to this page and there are the main elements,  and the client it displays all clients in the website",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: blackDashboard,
      source_code_link: "https://github.com/Youhana-Gergis/Black_Dashboard",
    },
    {
      name: "The solar system",
      description:
        "A programme using Three.js , details : The planets spin around the sun and the moon spin around the earth and twice around the sun",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
      ],
      image: solarSystem,
      source_code_link: "https://github.com/Youhana-Gergis/The-solar-system.git",
    },
  ];
  
  export { services, technologies, experiences, projects };