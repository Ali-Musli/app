import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {
  return (
    <div className="app">
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/catalog' element={<Catalog />}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
