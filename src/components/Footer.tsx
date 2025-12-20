import { Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://github.com/ayushp06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayushpandejee/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/ayush.pandejee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="justify-center">
              Made By Ayush Pandejee
            </p>
            <p className="text-sm text-slate-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}