import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeSidebar from "../components/pages/home-sidebar";

const Index = () => {
  return (
    <>
      <Seo pageTitle="Cesar's Personal Website" />
      <HomeSidebar />
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });