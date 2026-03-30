import React from "react";
import Navbar from "../components/Navbar";
import { BookOpen } from "lucide-react";

export default function WeeklySubjectFeedbackPage() {
  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
            Weekly Subject Feedback
          </h1>
          <p className="text-sm text-neutral-400">
            Share your thoughts on this week's subjects
          </p>
        </div>

        {/* FEEDBACK CONTAINER */}
        <div className="w-full bg-[#181818] border border-neutral-800 rounded-xl py-24 flex flex-col items-center justify-center shadow-xl">
          
          <div className="text-neutral-500 mb-6">
            <BookOpen size={48} strokeWidth={1.5} className="text-neutral-500/80" />
          </div>
          
          <h2 className="text-base text-neutral-200 font-bold tracking-wide mb-2 mt-4 text-center">
            All Caught Up!
          </h2>
          
          <p className="text-sm text-neutral-500 font-medium text-center">
            No subjects available for feedback at this time.
          </p>
          
        </div>

      </div>
    </div>
  );
}
