// Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';

// States
import useAuthState from './states/authState';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
