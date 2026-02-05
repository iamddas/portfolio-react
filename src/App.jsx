import { ThemeProvider } from './hooks';
import {
  Navbar,
  FloatingActionButton,
  Footer,
} from './components';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from './sections';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </ThemeProvider>
  );
}

export default App;
