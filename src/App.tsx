import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./shared/components/Layout";
import Loading from "./LazyLoad/loading"; // Import loading spinner

// Lazy Load Components
const SplineComponent = lazy(() => import("./pages/home/SplineComponent"));
const Services = lazy(() => import("./pages/home/Services"));
const B2BSection = lazy(() => import("./pages/home/b2b"));
const Generativeai = lazy(() => import("./pages/home/generativeai"));
const Circle = lazy(() => import("./pages/home/circle"));
const Box = lazy(() => import("./pages/home/box"));
const Team = lazy(() => import("./pages/home/team"));
const Contact = lazy(() => import("./pages/home/contact"));

const CulturesValuesESG = lazy(() => import("./pages/about-us/cultures-values-esg"));
const DiversityYoungMinds = lazy(() => import("./pages/about-us/diversity-young-minds"));
const RecentAwardsRecognition = lazy(() => import("./pages/about-us/recent-awards-recognition"));
const OurPartners = lazy(() => import("./pages/about-us/our-partners"));

const ForgeAI = lazy(() => import("./pages/services/forge-ai"));
const PerformAI = lazy(() => import("./pages/services/perform-ai"));
const Advisory = lazy(() => import("./pages/services/advisory"));
const TechSquads = lazy(() => import("./pages/services/tech-squads"));
 
const MedTech = lazy(() => import("./pages/Industries/medtech"));
const Automobile = lazy(() => import("./pages/Industries/automobile"));
const Insurance = lazy(() => import("./pages/Industries/insurance"));
const Banking = lazy(() => import("./pages/Industries/banking"));

const XTMXIntelligence = lazy(() => import("./pages/Intelligence/xtmx-intelligence"));
const Events = lazy(() => import("./pages/Intelligence/events"));
{/*
const Technologies = lazy(() => import("./pages/technologies"));
const Career = lazy(() => import("./pages/career"));
*/}
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <SplineComponent />
                  <Services />
                  <B2BSection />
                  <Generativeai />
                  <Circle />
                  <Box />
                  <Team />
                  <Contact />
                </>
              }
            />

            {/* About Us */}
            <Route path="/cultures-values-esg" element={<CulturesValuesESG />} />
            <Route path="/diversity-young-minds" element={<DiversityYoungMinds />} />
            <Route path="/recent-awards-recognition" element={<RecentAwardsRecognition />} />
            <Route path="/our-partners" element={<OurPartners />} />

            {/* Services */}
            <Route path="/forge-ai" element={<ForgeAI />} />
            <Route path="/perform-ai" element={<PerformAI />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/tech-squads" element={<TechSquads />} />
         
            {/* Industries */}
           <Route path="/medtech" element={<MedTech />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/banking" element={<Banking />} />

            {/* Intelligence */}
             <Route path="/xtmx-intelligence" element={<XTMXIntelligence />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
 
            {/* Other Pages */}
             {/*<Route path="/technologies" element={<Technologies />} />
            <Route path="/career" element={<Career />} />
*/}       
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
