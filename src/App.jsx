import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact';
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NoPage />} />
        <Route path="contact" element={<Contact />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
