import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatBot from './components/Chatbot';

function App() {
  const [messages, setMessages] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  // NEW: State for mobile menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const saveCurrentSession = () => {
    if (messages.length > 0 && selectedArtist) {
      const historyItem = {
        id: Date.now(),
        title: `${selectedArtist} - ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
        date: new Date().toISOString(),
        artist: selectedArtist,
        messages: [...messages]
      };
      setChatHistory(prev => [historyItem, ...prev]);
    }
  };

  const handleArtistSelect = (artist) => {
    saveCurrentSession();
    setMessages([]);
    setSelectedArtist(artist);
    setIsSidebarOpen(false);
  };

  const handleLoadSession = (session) => {
    saveCurrentSession();
    setMessages(session.messages);
    setSelectedArtist(session.artist);
    setIsSidebarOpen(false);
  };
  const clearSession = () => { setMessages([]); };
  const clearHistory = () => { setChatHistory([]); };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black relative">
      {/* Sidebar with mobile drawer logic */}
      <div className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:w-[380px]
        w-[88vw] max-w-[380px]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isSidebarOpen ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto'}
      `}>
        <Sidebar
          selectedArtist={selectedArtist}
          setSelectedArtist={handleArtistSelect}
          onLoadSession={handleLoadSession}
          onClearSession={clearSession}
          chatHistory={chatHistory}
          onClearHistory={clearHistory}
          onClose={() => setIsSidebarOpen(false)} // Close button for mobile
        />
      </div>

      {/* Main Chat Area */}
      <main className="flex-1 h-full relative">
        <ChatBot
          messages={messages}
          setMessages={setMessages}
          selectedArtist={selectedArtist}
          onMenuClick={() => setIsSidebarOpen(true)} // Open menu button
        />
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;