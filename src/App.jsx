import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account';
import Catalogue from './pages/Catalogue';
import Event from './pages/events/Event';
import NewEvent from './pages/events/NewEvent';

// Components
import Navbar from './components/Navbar';

// States
import { AuthProvider } from './states/authState';
import { EventsProvider } from './states/eventsState';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/new-event" element={<NewEvent />} />
          </Routes>
        </EventsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
