import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Adjust so Monday is the first day of the week, Sunday is the last
  const startDay = firstDayOfMonth === 0 ? 0 : firstDayOfMonth; // Image shows Sunday as first day!

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const handleSelectDate = (date) => {
    setSelectedDate(new Date(year, month, date));
  };

  // Generate days array
  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push({ empty: true });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
    const isSelected = i === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();
    days.push({ date: i, isToday, isSelected });
  }

  // Legend Data
  const legendItems = [
    { label: "Assignment", color: "bg-blue-500" },
    { label: "holiday", color: "bg-red-500" },
    { label: "exam", color: "bg-pink-500" },
    { label: "class test", color: "bg-orange-500" },

    { label: "result announcement", color: "bg-purple-500" },
    { label: "orientation", color: "bg-cyan-500" },
    { label: "convocation", color: "bg-pink-500" },
    { label: "Personal reasons", color: "bg-orange-500" },

    { label: "Festival celebration", color: "bg-orange-500" },
    { label: "Hackathon participation", color: "bg-cyan-500" },
    { label: "College events", color: "bg-blue-500" },
    { label: "Sick leave / medical reasons", color: "bg-red-500" },

    { label: "Placement drives", color: "bg-green-500" },
    { label: "Company work", color: "bg-indigo-500" },
    { label: "Interviews", color: "bg-green-500" },
    { label: "Family functions", color: "bg-pink-400" },

    { label: "Emergency situations", color: "bg-red-600" },
    { label: "Travel-related reasons", color: "bg-cyan-400" },
    { label: "Duty leave", color: "bg-purple-600" },
    { label: "Others", color: "bg-neutral-500" },
  ];

  // Dummy current selection formatting
  const formattedSelectedDate = selectedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h1 className="text-2xl font-bold mb-6 text-white tracking-wide">Calendar</h1>
        
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          
          {/* LEFT SECTION: CALENDAR GRID */}
          <div className="w-full xl:w-[70%] bg-[#111111] border border-neutral-800 rounded-xl p-6 shadow-2xl">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrevMonth}
                  className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleToday}
                  className="px-4 h-10 bg-neutral-800 hover:bg-neutral-700 text-sm font-medium text-white rounded transition-colors"
                >
                  Today
                </button>
              </div>
              
              <h2 className="text-lg font-semibold text-white">
                {monthNames[month]} {year}
              </h2>
              
              <button 
                onClick={handleNextMonth}
                className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white rounded transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 mb-10">
              {legendItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] md:text-xs text-neutral-300">
                  <div className={`w-2 h-2 mt-1 rounded-full shrink-0 ${item.color}`}></div>
                  <span className="leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 md:gap-3 text-center">
              {/* Day Labels */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-xs font-medium text-neutral-400 uppercase tracking-widest pb-4">
                  {day}
                </div>
              ))}

              {/* Day Boxes */}
              {days.map((day, idx) => {
                if (day.empty) {
                  return <div key={`empty-${idx}`} className="h-16 sm:h-20" />
                }
                return (
                  <div 
                    key={idx}
                    onClick={() => handleSelectDate(day.date)}
                    className={`h-16 sm:h-20 border border-neutral-800/80 rounded-lg p-2 md:p-3 text-left transition-all cursor-pointer relative group
                      ${day.isSelected ? 'border-blue-500 bg-blue-600/5 ring-1 ring-blue-500' : 'hover:border-neutral-600 hover:bg-neutral-800/30'}
                    `}
                  >
                    <span className={`text-sm ${day.isSelected && !day.isToday ? 'bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full -ml-1 -mt-1' : day.isToday && !day.isSelected ? 'text-blue-400 font-bold' : day.isToday && day.isSelected ? 'bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full -ml-1 -mt-1 font-bold' : 'text-neutral-200'}`}>
                      {day.date}
                    </span>

                    {/* Example Dummy Events for specific dates */}
                    {day.date === 15 && <div className="absolute top-8 md:top-10 flex flex-col gap-1 left-2 right-2"><div className="h-1 rounded-full bg-blue-500 w-full" /></div>}
                    {day.date === 22 && <div className="absolute top-8 md:top-10 flex flex-col gap-1 left-2 right-2"><div className="h-1 rounded-full bg-orange-500 w-full" /></div>}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT SECTION: DETAILS PANEL */}
          <div className="w-full xl:w-[30%] bg-[#1c1c1c] border border-neutral-800 rounded-xl p-6 shadow-xl sticky top-24 min-h-[500px]">
             <h2 className="text-xl font-bold text-white mb-8">{formattedSelectedDate}</h2>
             
             <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Events</h3>
                  {selectedDate.getDate() === 15 ? (
                    <div className="text-sm text-neutral-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> College events</div>
                  ) : selectedDate.getDate() === 22 ? (
                     <div className="text-sm text-neutral-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Hackathon participation</div>
                  ) : (
                    <p className="text-sm text-neutral-500 font-light">No events.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Leaves</h3>
                  <p className="text-sm text-neutral-500 font-light">No leaves.</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">Attendance</h3>
                  <p className="text-xs text-neutral-400 mb-2 font-medium">Subject entries:</p>
                  <div className="flex items-center gap-2 text-sm text-neutral-300">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    ReactJS — <span className="text-neutral-400">present</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">Assignments</h3>
                  <p className="text-sm text-neutral-500 font-light">None due.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
