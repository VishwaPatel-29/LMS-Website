import React, { useState } from "react";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { getInitials } from "../utils/getInitials";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const initials = getInitials(user?.name);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur supports-backdrop-filter:bg-neutral-900/60">
      {/* TOP BAR */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
            {initials}
          </div>

          <span className="text-white font-semibold">Student</span>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-1 ml-2">
            <NavLink 
              to="/student"
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Dashboard
            </NavLink>

            <NavLink 
              to="/attendance"
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Attendance
            </NavLink>

            <NavLink 
              to="/calendar"
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Calendar
            </NavLink>

            <NavLink 
              to="/chat"
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Chat
            </NavLink>

            {/* MORE */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded flex items-center gap-1">
                More <ChevronDown size={16} />
              </button>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-48 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl">
                <div className="p-2 space-y-1">
                  <NavLink 
                    to="/semester-attendance"
                    className={({ isActive }) => `block w-full text-left px-3 py-2 text-sm rounded transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
                  >
                    Semester Attendance
                  </NavLink>

                  <NavLink 
                    to="/feedback"
                    className={({ isActive }) => `block w-full text-left px-3 py-2 text-sm rounded transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
                  >
                    Feedback
                  </NavLink>

                  <NavLink 
                    to="/weekly-subject-feedback"
                    className={({ isActive }) => `block w-full text-left px-3 py-2 text-sm rounded transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
                  >
                    Weekly Subject Feedback
                  </NavLink>

                  <NavLink 
                    to="/apply-leave"
                    className={({ isActive }) => `block w-full text-left px-3 py-2 text-sm rounded transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
                  >
                    Apply Leave
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* SETTINGS DROPDOWN */}
          <div className="relative group hidden md:block">
            <button className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800">
              <Settings size={18} />
            </button>

            {/* DROPDOWN */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute right-0 mt-2 w-64 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl">
              {/* USER */}
              <div className="p-4 border-b border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold">
                      {initials}
                    </div>
                  )}
                </div>

                <div className="text-white text-sm font-medium truncate">
                  {user?.name}
                </div>
              </div>

              {/* MENU */}
              <div className="p-2">
                <div className="w-full text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                  View Profile
                </div>

                <div className="w-full text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800 cursor-pointer">
                  Logout
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-300 hover:bg-neutral-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-900/95 backdrop-blur px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex flex-col gap-1">
            <NavLink 
              to="/student"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Dashboard
            </NavLink>

            <NavLink 
              to="/attendance"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Attendance
            </NavLink>

            <NavLink 
              to="/calendar"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Calendar
            </NavLink>

            <NavLink 
              to="/chat"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded-md font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800'}`}
            >
              Chat
            </NavLink>

            <NavLink 
              to="/semester-attendance"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
            >
              Semester Attendance
            </NavLink>

            <NavLink 
              to="/feedback"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
            >
              Feedback
            </NavLink>

            <NavLink 
              to="/weekly-subject-feedback"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
            >
              Weekly Subject Feedback
            </NavLink>

            <NavLink 
              to="/apply-leave"
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded font-medium transition-colors ${isActive ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 text-neutral-300'}`}
            >
              Apply Leave
            </NavLink>

            <div className="border-t border-neutral-800 my-2" />

            <div className="px-3 py-2 hover:bg-neutral-800 rounded">
              View Profile
            </div>

            <div className="px-3 py-2 hover:bg-neutral-800 rounded">Logout</div>
          </div>
        </div>
      )}
    </header>
  );
}
