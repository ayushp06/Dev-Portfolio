import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ClickSpark from "./components/ClickSpark";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className={`min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ClickSpark>
    </>
  );
}