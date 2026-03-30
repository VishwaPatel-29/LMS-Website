import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";

import CalendarPage from "./pages/CalendarPage";
import AttendancePage from "./pages/AttendancePage";
import ChatPage from "./pages/ChatPage";
import SemesterAttendancePage from "./pages/SemesterAttendancePage";
import FeedbackPage from "./pages/FeedbackPage";
import WeeklySubjectFeedbackPage from "./pages/WeeklySubjectFeedbackPage";
import ApplyLeavePage from "./pages/ApplyLeavePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/semester-attendance" element={<SemesterAttendancePage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/weekly-subject-feedback" element={<WeeklySubjectFeedbackPage />} />
      <Route path="/apply-leave" element={<ApplyLeavePage />} />
    </Routes>
  );
}

export default App;
