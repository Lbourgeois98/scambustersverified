import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VerifyPage from './pages/VerifyPage';
import AgentsPage from './pages/AgentsPage';
import ApplyPage from './pages/ApplyPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/verify':
        document.title = 'Verify Agent | ScamBusters';
        return <VerifyPage />;
      case '/agents':
        document.title = 'Verified Agents | ScamBusters';
        return <AgentsPage />;
      case '/apply':
        document.title = 'Apply for Verification | ScamBusters';
        return <ApplyPage />;
      case '/about':
        document.title = 'About Us | ScamBusters';
        return <AboutPage />;
      default:
        document.title = 'ScamBusters | Casino Agent Verification';
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;