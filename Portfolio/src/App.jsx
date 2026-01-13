import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Trainings from './pages/Trainings';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.08),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(248,113,113,0.08),transparent_22%)]">
        <Navbar />
        <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-8 sm:px-10 lg:px-12">
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Trainings />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;