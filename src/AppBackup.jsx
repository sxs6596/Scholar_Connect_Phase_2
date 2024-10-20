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
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfiles from "./components/UserProfiles";
import CollaborationTools from './components/CollborationTools';
import ProposalDashboard from "./components/ProposalDashboard";
import FundingAndGrantsDashboard from "./components/FundingAndGrantsDashboard";
import EventsAndCalendarDashboard from "./components/EventsAndCalendarDashboard";

function AppBackup() {
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

          {/* Protected Routes */}
          <Route
            path="/userprofiles"
            element={
              <ProtectedRoute
                element={UserProfiles}
                allowedRoles={["Researcher", "Admin", "GrantApplicant", "EventParticipant"]}
              />
            }
          />
          <Route
            path="/proposaldashboard"
            element={
              <ProtectedRoute
                element={ProposalDashboard}
                allowedRoles={["Researcher", "Admin"]}
              />
            }
          />
          <Route
            path="/collaborationtools"
            element={
              <ProtectedRoute
                element={CollaborationTools}
                allowedRoles={["Researcher", "Admin"]}
              />
            }
          />
          <Route
            path="/grantsandfunding"
            element={
              <ProtectedRoute
                element={FundingAndGrantsDashboard}
                allowedRoles={["GrantApplicant", "Admin"]}
              />
            }
          />
          <Route
            path="/eventsdashboard"
            element={
              <ProtectedRoute
                element={EventsAndCalendarDashboard}
                allowedRoles={["EventParticipant", "Admin"]}
              />
            }
          />
          <Route
            path="/featuredtheses"
            element={
              <ProtectedRoute
                element={FeaturedTheses}
                allowedRoles={["Admin"]}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppBackup;
