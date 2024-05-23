import './App.css';
import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Extra } from './sections/Extra';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Extra />
      <Contact />
    </div>
  );
}

export default App;
