import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/home-sidebar";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Append Google Analytics script
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-R6YTKNK7ZW";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagInit = document.createElement("script");
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R6YTKNK7ZW');
    `;
    document.head.appendChild(gtagInit);
  }, []);

  return (
    <>
      <Seo pageTitle="Cesar's Personal Website" />
      <HomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
