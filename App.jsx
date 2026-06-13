import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Modals from './components/Modals';
import { supabase } from './supabaseClient';

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isAdminPanelOpen, setAdminPanelOpen] = useState(false);
  const [partners, setPartners] = useState([]);
  const location = useLocation();
  
  const adminCode = 'webadmin';
  let typedKeys = '';

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase.from('partners').select('*').order('created_at', { ascending: true });
      if (error) throw error;
      if (data) setPartners(data);
    } catch (err) {
      console.error('Supabase fetch error, falling back to local storage', err);
      const storedPartners = localStorage.getItem('websiteBridgePartners');
      if (storedPartners) setPartners(JSON.parse(storedPartners));
    }
  };

  useEffect(() => {
    fetchPartners();

    // Security Barrier
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert("Security Protocol Active: Right-click disabled.");
    };

    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
        (e.ctrlKey && e.keyCode === 85) 
      ) {
        e.preventDefault();
        alert("Security Protocol Active: Developer tools access blocked.");
        return;
      }

      // Admin Sequence Logic
      typedKeys += e.key;
      if (typedKeys.length > adminCode.length) {
        typedKeys = typedKeys.substring(typedKeys.length - adminCode.length);
      }
      if (typedKeys === adminCode) {
        setAdminPanelOpen(true);
        typedKeys = ''; 
      }
    };

    const handleClick = (e) => {
      // Just clear typed keys on random clicks to reset if needed
      typedKeys = ''; 
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary selection:text-background">
      <Navbar onOpenContact={() => setContactModalOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home partners={partners} onOpenContact={() => setContactModalOpen(true)} />} />
        </Routes>
      </main>
      <Modals 
        isContactModalOpen={isContactModalOpen}
        setContactModalOpen={setContactModalOpen}
        isAdminPanelOpen={isAdminPanelOpen}
        setAdminPanelOpen={setAdminPanelOpen}
        partners={partners}
        setPartners={setPartners}
      />
    </div>
  );
}

export default App;
