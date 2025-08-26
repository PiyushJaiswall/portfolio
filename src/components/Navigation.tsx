
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-primary">Piyush Jaiswal</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#certificates" className="hover:text-primary transition-colors">Certificates</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/PiyushJaiswall" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/piyush-jaiswal-435672229/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="mailto:piyushooo28@gmail.com">
                <Mail className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-fade-down">
            <a href="#about" className="block hover:text-primary transition-colors" onClick={closeMenu}>About</a>
            <a href="#experience" className="block hover:text-primary transition-colors" onClick={closeMenu}>Experience</a>
            <a href="#projects" className="block hover:text-primary transition-colors" onClick={closeMenu}>Projects</a>
            <a href="#certificates" className="block hover:text-primary transition-colors" onClick={closeMenu}>Certificates</a>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/PiyushJaiswall" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/piyush-jaiswal-435672229/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="mailto:piyushooo28@gmail.com">
                <Mail className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
