import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Plus, User, FileText, Check, X, Send, Calendar, Clock, Clock3 } from "lucide-react";

export default function ApplyLeavePage() {
  // Form State
  const [category, setCategory] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [remarks, setRemarks] = useState("");

  // Leave Requests State (Mock History)
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      title: "Hackathon participation",
      appliedOn: "12/03/2026",
      status: "Approved",
      dateRange: "13/03/2026 - 16/03/2026",
      timeRange: "06:00 - 22:00",
      days: 4,
      credits: 0,
      feedback: "Duty leave will be provided for the 13th, 14th, 15th, and 16th."
    },
    {
      id: 2,
      title: "Emargancy Situations",
      appliedOn: "18/03/2026",
      status: "Approved",
      dateRange: "18/03/2026 - 24/03/2026",
      timeRange: "",
      days: 7,
      credits: 0,
      Remarks : "I am deeply saddened to inform you that my uncle has passed away unexpectedly, and I need to be with my family during this difficult time. Kindly grant me leave for a few days."
    }
  ]);

  // Derived Stats
  const totalApps = leaveRequests.length;
  const pendingApps = leaveRequests.filter(r => r.status === "pending").length;
  const approvedApps = leaveRequests.filter(r => r.status === "approved").length;
  const rejectedApps = leaveRequests.filter(r => r.status === "rejected").length;

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !fromDate || !toDate) return;

    // Calculate days mock (simple visual parsing for demonstration)
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1 || 1;

    // Convert to DD/MM/YYYY format for UI consistency
    const formatDt = (dtStr) => {
      const parts = dtStr.split("-");
      if(parts.length < 3) return dtStr;
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    const newRequest = {
      id: Date.now(),
      title: category,
      appliedOn: new Date().toLocaleDateString('en-GB'),
      status: "pending",
      dateRange: `${formatDt(fromDate)} - ${formatDt(toDate)}`,
      timeRange: leaveTime && returnTime ? `${leaveTime} - ${returnTime}` : "",
      days: diffDays,
      credits: 0,
      Remarks: "",
      feedback: ""
    };

    // Inject to top of the list
    setLeaveRequests([newRequest, ...leaveRequests]);

    // Reset Form
    setCategory("");
    setFromDate("");
    setToDate("");
    setLeaveTime("");
    setReturnTime("");
    setRemarks("");
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-4">
        
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-1">Apply for Leave</h1>
          <p className="text-sm text-neutral-400">Submit your leave application and track your requests</p>
        </div>

        {/* 4 STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#141414] border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="text-2xl font-bold text-white mb-1">{totalApps}</div>
            <div className="text-xs text-neutral-400 font-medium">Total Applications</div>
          </div>
          <div className="bg-[#141414] border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="text-2xl font-bold text-yellow-500 mb-1">{pendingApps}</div>
            <div className="text-xs text-neutral-400 font-medium">Pending Review</div>
          </div>
          <div className="bg-[#141414] border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="text-2xl font-bold text-green-500 mb-1">{approvedApps}</div>
            <div className="text-xs text-neutral-400 font-medium">Approved</div>
          </div>
          <div className="bg-[#141414] border border-neutral-800 rounded-xl p-5 shadow-lg">
            <div className="text-2xl font-bold text-red-500 mb-1">{rejectedApps}</div>
            <div className="text-xs text-neutral-400 font-medium">Rejected</div>
          </div>
        </div>

        {/* 2 COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* LEFT: FORM COLUMN */}
          <div className="w-full lg:w-5/12 bg-[#141414] border border-neutral-800 rounded-xl p-6 shadow-2xl">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center border border-neutral-800">
                <Plus size={18} className="text-neutral-300" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">New Leave Application</h2>
                <p className="text-xs text-neutral-500 mt-0.5 font-medium">Fill out the form to submit your leave request</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-neutral-200">Leave Category</label>
                <select 
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select category</option>
                  <option>Personal Reasons</option>
                            <option>Festival Celebration</option>
                            <option>Hacathon Participation</option>
                            <option>Collage Events</option>
                            <option>Sick Leave</option>
                            <option>Placement Drives</option>
                            <option>Company Work</option>
                            <option>Interviews</option>
                            <option>Family Functions</option>
                            <option>Emergancy Situations</option>
                            <option>Travel-related Reasons</option>
                            <option>Duty Leave</option>
                            <option>Others</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-neutral-200">From Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg pl-3 pr-10 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-neutral-200">To Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg pl-3 pr-10 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-neutral-200">Leave Time</label>
                  <input 
                    type="time" 
                    value={leaveTime}
                    onChange={(e) => setLeaveTime(e.target.value)}
                    className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-neutral-200">Return Time</label>
                  <input 
                    type="time" 
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-neutral-200">Additional Remarks (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Any additional information for your mentor or admin"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full bg-[#111111] border border-neutral-700/80 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 rounded-lg text-sm font-semibold text-neutral-200 bg-[#1e3256] hover:bg-[#253e6b] transition-colors flex items-center justify-center gap-2 border border-[#2a4575]"
              >
                <Send size={15} />
                Submit Leave Application
              </button>
            </form>
          </div>

          {/* RIGHT: TRACKER COLUMN */}
          <div className="w-full lg:w-7/12 bg-[#141414] border border-neutral-800 rounded-xl p-6 shadow-2xl">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center border border-neutral-800">
                <User size={18} className="text-neutral-300" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">My Leave Requests</h2>
                <p className="text-xs text-neutral-500 mt-0.5 font-medium">Track the status of your applications</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {leaveRequests.map((req) => (
                <div key={req.id} className="bg-[#111111] border border-neutral-800/80 rounded-xl p-5 hover:border-neutral-700 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-[#181818] border border-neutral-800">
                        <FileText size={14} className="text-neutral-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-neutral-100">{req.title}</h3>
                        <p className="text-xs text-neutral-500 mt-0.5">Applied on {req.appliedOn}</p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded shadow-sm border text-[11px] font-bold tracking-wider uppercase
                      ${req.status === 'approved' ? 'bg-green-950/40 text-green-500 border-green-900/50' : 
                        req.status === 'rejected' ? 'bg-red-950/40 text-red-500 border-red-900/50' : 
                        'bg-yellow-950/40 text-yellow-500 border-yellow-900/50'}
                    `}>
                      {req.status === 'approved' && <Check size={12} strokeWidth={3} />}
                      {req.status === 'rejected' && <X size={12} strokeWidth={3} />}
                      {req.status === 'pending' && <Clock3 size={12} strokeWidth={3} />}
                      {req.status}
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-neutral-400 font-medium ml-[48px]">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-neutral-500" />
                      {req.dateRange}
                    </div>
                    
                    {req.timeRange && (
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-neutral-500" />
                        {req.timeRange}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      <Clock3 size={13} className="text-neutral-500" />
                      {req.days} {req.days === 1 ? 'day' : 'days'}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Check size={14} strokeWidth={2.5} className="text-neutral-500" />
                      {req.credits} credits
                    </div>
                  </div>

                  {/* Feedback Section (if approved/exists based on mockup) */}
                  {req.feedback && (
                    <div className="mt-5 ml-[48px] bg-[#181818] border border-neutral-800/80 rounded-lg p-3">
                      <div className="text-[11px] text-neutral-500 font-medium mb-1">Teacher Feedback:</div>
                      <div className="text-xs text-neutral-300">{req.feedback}</div>
                    </div>
                  )}
                  {req.Remarks && (
                    <div className="mt-5 ml-[48px] bg-[#181818] border border-neutral-800/80 rounded-lg p-3">
                      <div className="text-[11px] text-neutral-500 font-medium mb-1">Additional Remarks:</div>
                      <div className="text-xs text-neutral-300">{req.Remarks}</div>
                    </div>
                  )}

                </div>
              ))}

              {leaveRequests.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm text-neutral-500">No leave requests found.</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
