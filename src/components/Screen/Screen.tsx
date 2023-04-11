import styled from "styled-components";

import Dock from "../Dock/Dock";
import MenuLayout from "../Menu/Menu";
import Topbar from "../Topbar/Topbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const appBoxes = [
  {
    apps: [
      {
        appName: "Email",
        appIconUrl: "/appIcons/applemail.svg",
        appUrl: "mailto:bakhtiyorovdilshod@gmail.com",
        openOnClick: "page",
      },
      {
        appName: "Github",
        appIconUrl: "/appIcons/github.svg",
        appUrl: "https://github.com/Finbek",
        openOnClick: "page",
      },
      {
        appName: "Leetcode",
        appIconUrl: "/appIcons/leetcode-96.png",
        appUrl: "https://leetcode.com/Dilshodbek/",
        openOnClick: "AppWindow",
      },
      {
        appName: "LinkedIn",
        appIconUrl: "/appIcons/linkedIn.svg",
        appUrl: "https://www.linkedin.com/in/dilshod-bakhtiyorov-240995175/",
        openOnClick: "page",
      },
      {
        appName: "Resume.pdf",
        appIconUrl: "/appIcons/pdf.svg",
        appUrl:
          "https://drive.google.com/file/d/1Cs25Fh673hcqQ8nx1NJBpG3tVEKQp2QA/view?usp=sharing",
        openOnClick: "page",
      },
    ],
    title: "Productivity",
  },
  {
    apps: [
      {
        appName: "Katana",
        appIconUrl: "/appIcons/katana.svg",
        appUrl: "https://dangame.netlify.app/",
        openOnClick: "AppWindow",
      },
      {
        appName: "Photos",
        appIconUrl: "/appIcons/next.svg",
        appUrl: "https://dangame.netlify.app/",
        openOnClick: "Portfolio",
      },
      {
        appName: "Photos",
        appIconUrl: "/appIcons/next.svg",
        appUrl: "https://dangame.netlify.app/",
        openOnClick: "AppWindow",
      },
      {
        appName: "Photos",
        appIconUrl: "/appIcons/next.svg",
        appUrl: "https://dangame.netlify.app/",
        openOnClick: "AppWindow",
      },
      {
        appName: "Photos",
        appIconUrl: "/appIcons/vercel.svg",
        appUrl: "https://dangame.netlify.app/",
        openOnClick: "AppWindow",
      },
    ],
    title: "Productivity",
  },
];

const Screen = () => {
  return (
    <Container>
      <Topbar />

      <MenuLayout appBoxes={appBoxes} />

      <Dock />
    </Container>
  );
};

export default Screen;
