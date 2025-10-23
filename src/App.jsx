import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar';

// States
import useAuthState from './states/authState';
import { EventsProvider } from './states/eventsState';

function App() {
  return (
    <BrowserRouter>
      <EventsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </EventsProvider>
    </BrowserRouter>
  );
}

export default App;
