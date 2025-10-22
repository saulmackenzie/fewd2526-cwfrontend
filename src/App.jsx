// Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';

// States
import useAuthState from './states/authState';
import { EventsProvider } from './states/eventsState';

function App() {
  return (
    <EventsProvider>
      <Navbar />
      <Home />
    </EventsProvider>
  );
}

export default App;
