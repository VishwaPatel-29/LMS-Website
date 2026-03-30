import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MessageSquare, X } from "lucide-react";

export default function FeedbackPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  
  // Form State
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!heading || !description) return;
    
    const newFeedback = {
      id: Date.now(),
      heading,
      category: category || "General",
      description,
      date: new Date().toLocaleDateString()
    };
    
    setFeedbacks([newFeedback, ...feedbacks]);
    
    // Reset and close
    setHeading("");
    setCategory("");
    setDescription("");
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setHeading("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans relative">
      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 flex flex-col min-h-[calc(100vh-80px)]">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12 mt-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Feedback</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>+</span> Create Feedback
          </button>
        </div>

        {/* CONDITIONAL RENDER: LIST OR EMPTY STATE */}
        {feedbacks.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center pb-20">
            <div className="text-neutral-500 mb-6 flex justify-center">
              <MessageSquare size={56} strokeWidth={1.5} className="text-neutral-500/80" />
            </div>
            
            <h2 className="text-lg md:text-xl font-bold text-neutral-300 tracking-wide mb-2">No feedback yet</h2>
            
            <p className="text-sm text-neutral-500 font-medium mb-8 text-center max-w-sm">
              Share your thoughts and help us improve!
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Submit Your First Feedback
            </button>
          </div>
        ) : (
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {feedbacks.map((fb) => (
              <div key={fb.id} className="bg-[#141414] border border-neutral-800 rounded-xl p-6 shadow-xl relative overflow-hidden group hover:border-neutral-700 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-neutral-800/80 text-neutral-300 rounded-full">{fb.category}</span>
                  <span className="text-xs text-neutral-600 font-medium">{fb.date}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-100 mb-2">{fb.heading}</h3>
                <p className="text-sm text-neutral-400 line-clamp-3">{fb.description}</p>
                
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-600/0 group-hover:bg-blue-600/20 transition-all rounded-r-xl" />
              </div>
            ))}
          </div>
        )}

      </div>

      {/* CREATE FEEDBACK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="w-full max-w-md bg-[#181818] border border-neutral-800/80 rounded-2xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-wide">Create Feedback</h2>
              <button 
                onClick={handleClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-300">Heading</label>
                <input 
                  type="text" 
                  autoFocus
                  required
                  placeholder="Enter feedback heading..."
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className="w-full bg-[#111111] border border-neutral-700 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-300">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#111111] border border-neutral-700 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>Select a category</option>
                  <option value="Academics" className="bg-[#181818] text-white">Academics</option>
                  <option value="Faculty" className="bg-[#181818] text-white">Faculty</option>
                  <option value="Technical" className="bg-[#181818] text-white">Technical</option>
                  <option value="Infrastructure" className="bg-[#181818] text-white">Infrastructure</option>
                  <option value="Other" className="bg-[#181818] text-white">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-300">Description</label>
                <textarea 
                  required
                  placeholder="Describe your feedback..."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#111111] border border-neutral-700 hover:border-neutral-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button 
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 rounded-lg text-sm font-semibold bg-neutral-700/40 hover:bg-neutral-700/60 text-neutral-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-full py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  Submit
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
