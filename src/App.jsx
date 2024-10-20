import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast"; // Import the Toaster component
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import FeaturedTheses from "./components/FeaturedTheses";
import PrivacyPolicy from "./components/Privacy";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfiles from "./components/UserProfiles";
import CollaborationTools from './components/CollborationTools';
import ProposalDashboard from "./components/ProposalDashboard";
import FundingAndGrantsDashboard from "./components/FundingAndGrantsDashboard";
import EventsAndCalendarDashboard from "./components/EventsAndCalendarDashboard";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Add Toaster here */}
      <Routes>
        {/* Wrap your routes with the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Unprotected Routes */}
          <Route path="/userprofiles" element={<UserProfiles />} />
          <Route path="/proposaldashboard" element={<ProposalDashboard />} />
          <Route path="/collaborationtools" element={<CollaborationTools />} />
          <Route path="/grantsandfunding" element={<FundingAndGrantsDashboard />} />
          <Route path="/eventsdashboard" element={<EventsAndCalendarDashboard />} />
          <Route path="/featuredtheses" element={<FeaturedTheses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
