import React from "react";
import Navbar from "../components/Navbar";

export default function AttendancePage() {
  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* OVERVIEW CARD */}
        <div className="w-full bg-[#111111] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-neutral-800 bg-[#161616]">
            <h2 className="text-sm font-bold text-white tracking-wide">Overview</h2>
          </div>

          {/* Body */}
          <div className="p-6">
            
            {/* Display Header */}
            <div className="mb-6">
              <h3 className="text-base font-semibold text-white">Today's Attendance</h3>
              <p className="text-xs text-neutral-500 font-medium">Date: 2026-03-28</p>
            </div>

            {/* Attendance Container */}
            <div className="bg-[#181818] border border-neutral-800/80 rounded-xl p-4 flex items-center justify-between shadow-sm">
               
               <div className="flex flex-col gap-1">
                 <span className="text-sm font-medium text-neutral-200">SU0201 - ReactJS</span>
                 <span className="text-xs text-neutral-500">Marked by: Ankita</span>
               </div>

               {/* Present Badge */}
               <div className="px-3 py-1 rounded-md bg-green-950/40 border border-green-900/50 flex items-center justify-center">
                 <span className="text-[11px] font-bold tracking-widest uppercase text-green-500">present</span>
               </div>

            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
