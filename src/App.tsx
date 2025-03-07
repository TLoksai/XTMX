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
const Future = lazy(() => import("./pages/about-us/future"));
const Thework = lazy(() => import("./pages/about-us/thework"));

const DiversityYoungMinds = lazy(() => import("./pages/about-us/diversity-young-minds"));
const RecentAwardsRecognition = lazy(() => import("./pages/about-us/recent-awards-recognition"));
const OurPartners = lazy(() => import("./pages/about-us/our-partners"));

const ForgeAI = lazy(() => import("./pages/services/forge-ai"));
const Forgeai_learnmore = lazy(() => import("./pages/services/forgeai_learnmore"));

const PerformAI = lazy(() => import("./pages/services/perform-ai"));
const Performai_learnmore = lazy(() => import("./pages/services/performai_learnmore"));

const Advisory = lazy(() => import("./pages/services/advisory"));
const TechSquads = lazy(() => import("./pages/services/tech-squads"));
 
const MedTech = lazy(() => import("./pages/Industries/medtech"));
const Automobile = lazy(() => import("./pages/Industries/automobile"));
const Insurance = lazy(() => import("./pages/Industries/insurance"));
const Banking = lazy(() => import("./pages/Industries/banking"));

const XTMXIntelligence = lazy(() => import("./pages/Intelligence/xtmx-intelligence"));
const Events = lazy(() => import("./pages/Intelligence/events"));

const NotFound = lazy(() => import("./pages/notfound"));

const Search = lazy(() => import("./pages/career/search"));
const Innotern = lazy(() => import("./pages/career/innotern"));
const Experienced = lazy(() => import("./pages/career/experienced"));

const Dashboard = lazy(() => import("./pages/Dashboard"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <Layout>
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
              </Layout>
            }
          />

          {/* About Us */}
          <Route
            path="/cultures-values-esg"
            element={
              <Layout>
                <CulturesValuesESG />
              </Layout>
            }
          />
          <Route
            path="/thework"
            element={
              <Layout>
                <Thework />
              </Layout>
            }
          />
          <Route
            path="/future"
            element={
              <Layout>
                <Future />
              </Layout>
            }
          />
          <Route
            path="/diversity-young-minds"
            element={
              <Layout>
                <DiversityYoungMinds />
              </Layout>
            }
          />
          <Route
            path="/recent-awards-recognition"
            element={
              <Layout>
                <RecentAwardsRecognition />
              </Layout>
            }
          />
          <Route
            path="/our-partners"
            element={
              <Layout>
                <OurPartners />
              </Layout>
            }
          />

          {/* Services */}
          <Route
            path="/forge-ai"
            element={
              <Layout>
                <ForgeAI />
              </Layout>
            }
          />
          <Route
            path="/forgeai_learnmore"
            element={
              <Layout>
                <Forgeai_learnmore />
              </Layout>
            }
          />

          <Route
            path="/perform-ai"
            element={
              <Layout>
                <PerformAI />
              </Layout>
            }
          />
          <Route
            path="/performai_learnmore"
            element={
              <Layout>
                <Performai_learnmore />
              </Layout>
            }
          />

          <Route
            path="/advisory"
            element={
              <Layout>
                <Advisory />
              </Layout>
            }
          />
          <Route
            path="/tech-squads"
            element={
              <Layout>
                <TechSquads />
              </Layout>
            }
          />

          {/* Industries */}
          <Route
            path="/medtech"
            element={
              <Layout>
                <MedTech />
              </Layout>
            }
          />
          <Route
            path="/automobile"
            element={
              <Layout>
                <Automobile />
              </Layout>
            }
          />
          <Route
            path="/insurance"
            element={
              <Layout>
                <Insurance />
              </Layout>
            }
          />
          <Route
            path="/banking"
            element={
              <Layout>
                <Banking />
              </Layout>
            }
          />

          {/* Intelligence */}
          <Route
            path="/xtmx-intelligence"
            element={
              <Layout>
                <XTMXIntelligence />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

          {/* Careers */}
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />

          <Route
            path="/search"
            element={
              <Layout>
                <Search />
              </Layout>
            }
          />

          <Route
            path="/hiring_Innotern"
            element={
              <Layout>
                <Innotern />
              </Layout>
            }
          />

          <Route
            path="/experienced_hired"
            element={
              <Layout>
                <Experienced />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
