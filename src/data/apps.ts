//apps - appName -string (title), appIconUrl - string (url local), appUrl - string (url external), type - string (types:  page(go external resource), app(compoent))

export const apps = {
  email: {
    appName: "Email",
    appIconUrl: "/appIcons/applemail.svg",
    appUrl: "mailto:bakhtiyorovdilshod@gmail.com",
    type: "page",
  },
  github: {
    appName: "Github",
    appIconUrl: "/appIcons/github.svg",
    appUrl: "https://github.com/Finbek",
    type: "page",
  },
  leetcode: {
    appName: "Leetcode",
    appIconUrl: "/appIcons/leetcode-96.png",
    appUrl: "https://leetcode.com/Dilshodbek/",
    type: "app",
  },
  linkedin: {
    appName: "LinkedIn",
    appIconUrl: "/appIcons/linkedIn.svg",
    appUrl: "https://www.linkedin.com/in/dilshod-bakhtiyorov-240995175/",
    type: "page",
  },
  resume: {
    appName: "Resume.pdf",
    appIconUrl: "/appIcons/pdf.svg",
    appUrl:
      "https://drive.google.com/file/d/1Cs25Fh673hcqQ8nx1NJBpG3tVEKQp2QA/view?usp=sharing",
    type: "page",
  },
  telegram: {
    appName: "Telegram",
    appIconUrl: "/appIcons/telegram.svg",
    appUrl: "tg://resolve?domain=@YouFin",
    type: "page",
  },

  katana: {
    appName: "Katana",
    appIconUrl: "/appIcons/katana.svg",
    appUrl: "https://dangame.netlify.app/",
    type: "app",
  },
  me: {
    appName: "Me",
    appIconUrl: "/appIcons/me.webp",
    appUrl: "",
    type: "app",
  },
  calculator: {
    appName: "Calculator",
    appIconUrl: "/appIcons/calculator.svg",
    appUrl: "",
    type: "app",
  },
  facebook: {
    appName: "Facebook",
    appIconUrl: "/appIcons/facebook.svg",
    appUrl: "https://fbcopymui.netlify.app/",
    type: "app",
  },
  wallpapers: {
    appName: "Wallpapers",
    appIconUrl: "/appIcons/wallpaper.svg",
    appUrl: "",
    type: "app",
  },
  attributes: {
    appName: "Attributes",
    appIconUrl: "/appIcons/attribution.png",
    appUrl: "",
    type: "app",
  },
};

export const appBoxes = [
  {
    apps: [
      apps["email"],
      apps["github"],
      apps["leetcode"],
      apps["linkedin"],
      apps["resume"],
      apps["telegram"],
    ],
    title: "Social Media",
  },
  {
    apps: [
      apps["katana"],
      apps["me"],
      apps["calculator"],
      apps["facebook"],
      apps["wallpapers"],
      apps["attributes"],
    ],
    title: "Projects",
  },
];
