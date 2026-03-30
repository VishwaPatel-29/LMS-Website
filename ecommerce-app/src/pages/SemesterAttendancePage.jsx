import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { X, Check } from "lucide-react";

export default function SemesterAttendancePage() {
  const [activeSemester, setActiveSemester] = useState(1);

  const semesters = [
    {
      id: 1,
      name: "Semester 1",
      startDate: "31/07/2025",
      endDate: "28/01/2026",
      overall: 54,
      totalMarked: 271,
      present: 147,
      absent: 124,
      leaveDays: 0,
      internLeaveDays: 0,
      duration: "181 days",
      statusMsg: "Your attendance is critically low. Please prioritize attending classes.",
      statusType: "danger", // danger | success
    },
    {
      id: 2,
      name: "Semester 2",
      startDate: "29/01/2026",
      endDate: "30/06/2026",
      overall: 93,
      totalMarked: 130,
      present: 122,
      absent: 8,
      leaveDays: 2,
      internLeaveDays: 0,
      duration: "152 days",
      statusMsg: "Your attendance is excellent.",
      statusType: "success",
    }
  ];

  const current = semesters.find(s => s.id === activeSemester);

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Semester Attendance</h1>
          <p className="text-sm text-neutral-400">View your attendance statistics by semester</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* SEMESTER LIST (LEFT COLUMN) */}
          <div className="w-full lg:w-1/4 bg-[#141414] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shrink-0">
            <div className="px-5 py-4 border-b border-neutral-800">
              <h2 className="text-sm font-bold text-white tracking-wide">Semesters</h2>
            </div>
            <div className="p-3 space-y-2">
              {semesters.map((sem) => {
                const isActive = sem.id === activeSemester;
                return (
                  <div 
                    key={sem.id}
                    onClick={() => setActiveSemester(sem.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer group
                      ${isActive 
                        ? 'bg-blue-600/10 border-blue-600/60' 
                        : 'bg-transparent border-transparent hover:bg-neutral-800/50 hover:border-neutral-700'
                      }
                    `}
                  >
                    <div className={`font-semibold text-sm mb-1 ${isActive ? 'text-blue-100' : 'text-neutral-300'}`}>
                      {sem.name}
                    </div>
                    <div className="text-xs text-neutral-500 font-medium">
                      {sem.startDate} - {sem.endDate}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* SMT DETAILS PANEL (RIGHT COLUMN) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            
            {/* Top Stat Box */}
            <div className="bg-[#141414] border border-neutral-800 rounded-xl p-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-base font-bold text-white mb-1">{current.name}</h2>
                  <p className="text-xs text-neutral-500 font-medium">{current.startDate} - {current.endDate}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{current.overall}%</div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">Attendance</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-neutral-400">Overall Attendance</span>
                  <span className="text-sm font-semibold text-white">{current.overall}%</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-700 ${current.statusType === 'danger' ? 'bg-red-500' : 'bg-green-500'}`}
                    style={{ width: `${current.overall}%` }}
                  />
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                
                <div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-2 font-medium">Total Marked</div>
                  <div className="text-2xl font-bold text-white">{current.totalMarked}</div>
                </div>

                <div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-2 font-medium">Present Count</div>
                  <div className="text-2xl font-bold text-green-500">{current.present}</div>
                </div>

                <div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-2 font-medium">Absent Count</div>
                  <div className="text-2xl font-bold text-red-500">{current.absent}</div>
                </div>

                <div className="bg-[#0f0f0f] border border-neutral-800/60 rounded-xl p-4">
                  <div className="text-xs text-neutral-500 mb-2 font-medium">Attendance %</div>
                  <div className="text-2xl font-bold text-blue-500">{current.overall}%</div>
                </div>

              </div>

              {/* Status Breakdown & Period Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Status Breakdown */}
                <div>
                  <h3 className="text-xs text-neutral-500 mb-4 font-medium uppercase tracking-wider">Status Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Present Count</span>
                      <span className="min-w-8 text-center px-1.5 py-0.5 rounded border border-green-700/50 bg-green-900/30 text-green-500 text-xs font-semibold">{current.present}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Absent Count</span>
                      <span className="min-w-8 text-center px-1.5 py-0.5 rounded border border-red-700/50 bg-red-900/40 text-red-500 text-xs font-semibold">{current.absent}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Leave Days</span>
                      <span className="min-w-8 text-center px-1.5 py-0.5 rounded border border-orange-700/50 bg-orange-900/30 text-orange-500 text-xs font-semibold">{current.leaveDays}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Intern Leave Days</span>
                      <span className="min-w-8 text-center px-1.5 py-0.5 rounded border border-purple-700/50 bg-purple-900/30 text-purple-400 text-xs font-semibold">{current.internLeaveDays}</span>
                    </div>
                  </div>
                </div>

                {/* Period Information */}
                <div>
                  <h3 className="text-xs text-neutral-500 mb-4 font-medium uppercase tracking-wider">Period Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Start Date</span>
                      <span className="text-neutral-300">{current.startDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">End Date</span>
                      <span className="text-neutral-300">{current.endDate}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-300">Duration</span>
                      <span className="text-neutral-300">{current.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Attendance Status Box */}
            <div className="bg-[#141414] border border-neutral-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-sm font-bold text-white mb-6">Attendance Status</h3>
              
              <div className={`flex items-start gap-3 ${current.statusType === 'danger' ? 'text-red-500' : 'text-green-500'}`}>
                {current.statusType === 'danger' ? <X size={18} className="mt-0.5" /> : <Check size={18} className="mt-0.5" />}
                <p className="text-sm font-medium">{current.statusMsg}</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
