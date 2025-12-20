import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-slate-900">
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Software Engineer & Full-Stack Developer</span>
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine elegant code with intuitive design. 
            Passionate about creating scalable solutions and exploring new technologies.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-purple-500/50 text-purple-200 hover:bg-purple-900/30 hover:border-purple-400"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
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