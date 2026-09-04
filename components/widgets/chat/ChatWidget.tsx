"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group w-12 h-12 bg-[#1a73e8] text-white rounded-full shadow-lg hover:bg-[#1558b0] transition-all duration-300 flex items-center justify-center transform hover:scale-110 cursor-pointer"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de consultas"}
      >
        <span className="absolute right-full mr-2.5 top-1/2 -translate-y-1/2 bg-[#1558b0] text-white px-3 py-1 rounded-lg shadow-xl font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-x-1 pointer-events-none text-sm">
          Consultas
          <span className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-[#1558b0] transform rotate-45" />
        </span>
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
