import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import GradientText from "./GradientText";

export function Hero() {
  const roles = ["Aerospace Engineer", "Software Developer", "Photographer"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const atFullText = displayText === currentRole;
    const atEmpty = displayText === "";

    const baseSpeed = isDeleting ? 40 : 80;
    const pause = atFullText && !isDeleting ? 1100 : atEmpty && isDeleting ? 200 : baseSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && atFullText) {
        setIsDeleting(true);
        return;
      }
      if (isDeleting && atEmpty) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, Math.max(displayText.length - 1, 0))
        : currentRole.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, pause);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-slate-900">
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-0 text-white overflow-visible">
            Hi, I'm <GradientText colors={["#a855f7", "#60a5fa", "#a855f7", "#60a5fa", "#a855f7"]} animationSpeed={3}>Ayush Pandejee</GradientText>
          </h1>
          <p className="text-4xl md:text-5xl mb-8 mt-4 text-white font-semibold h-16 md:h-20 flex items-center justify-center gap-2 w-full text-center translate-x-6 md:translate-x-7">
            <span className="inline-block min-w-[18ch] text-center whitespace-nowrap">{displayText}</span>
            <span className="inline-block h-8 w-[10px] bg-white animate-pulse align-middle" aria-hidden="true"></span>
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Aerospace Engineering and Information Sciences & Technology at The Pennsylvania State University
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/ayushp06" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ayushpandejee/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ayush.pandejee/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-300 hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
