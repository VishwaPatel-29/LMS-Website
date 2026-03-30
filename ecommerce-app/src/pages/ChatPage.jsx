import React from "react";
import Navbar from "../components/Navbar";

export default function ChatPage() {
  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* HEADER SECTION */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Chat Groups</h1>
          <p className="text-sm text-neutral-400 mt-1">
            Groups assigned to you and universal groups.
          </p>
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-sm text-neutral-500">
            No groups assigned to you yet.
          </p>
        </div>

      </div>
    </div>
  );
}
