import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Books } from "./components/Books";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Services />
        <Books />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
