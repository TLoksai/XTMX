import React from "react";
import Layout from "./shared/components/Layout";
import SplineComponent from "./pages/home/SplineComponent";
import Services from "./pages/home/Services";
import B2BSection from "./pages/home/b2b";
import Generativeai from "./pages/home/generativeai";
import Circle from "./pages/home/circle";
import Box from "./pages/home/box";
import Team from "./pages/home/team";
import Contact from "./pages/home/contact";

const App: React.FC = () => {
  return (
    <Layout>
      <SplineComponent />
      <Services />
      <B2BSection />
      <Generativeai />
      <Circle />
      <Box />
      <Team />
      <Contact />
    </Layout>
  );
};

export default App;
