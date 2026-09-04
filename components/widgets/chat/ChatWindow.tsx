"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send } from "lucide-react";
import { TypingIndicator } from "./TypingIndicator";

type Message = {
  role: "user" | "bot";
  content: string;
};

const WELCOME: Message = {
  role: "bot",
  content: "Hola 👋 ¿Tenés alguna pregunta sobre DreamHouse Baradero?",
};

interface ChatWindowProps {
  onClose: () => void;
}

export function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const reply: string = res.ok
        ? data.reply
        : "Hubo un problema al consultar. Intentá de nuevo.";

      setMessages((prev) => [...prev, { role: "bot", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "No pude conectarme. Verificá tu conexión e intentá de nuevo.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="absolute bottom-full right-0 mb-3 w-80 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1a73e8] text-white shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="font-medium text-sm">DreamHouse Asistente</span>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-white/20 rounded-full p-1 transition-colors duration-150"
          aria-label="Cerrar chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {messages.map((msg, i) =>
          msg.role === "bot" ? (
            <div
              key={i}
              className="flex items-start gap-2 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-3 py-2 text-sm max-w-[85%] leading-relaxed">
                {msg.content}
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="flex justify-end mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="bg-[#1a73e8] text-white rounded-2xl rounded-tr-sm px-3 py-2 text-sm max-w-[85%] leading-relaxed">
                {msg.content}
              </div>
            </div>
          )
        )}

        {isLoading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-gray-100 shrink-0 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          placeholder="Escribí tu pregunta..."
          className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]/30 disabled:opacity-50 bg-gray-50"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          aria-label="Enviar mensaje"
          className="w-9 h-9 bg-[#1a73e8] text-white rounded-xl flex items-center justify-center hover:bg-[#1558b0] transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
}
