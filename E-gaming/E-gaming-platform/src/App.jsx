import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage';
import TournamentPage from './pages/TournamentPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
