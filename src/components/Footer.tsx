import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-purple-500 fill-current" /> by Your Name
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