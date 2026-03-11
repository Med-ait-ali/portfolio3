import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2 group z-50">
          <div className="w-9 h-9 md:w-10 md:h-10 border-2 border-[#00F5D4] rounded-lg flex items-center justify-center text-[#00F5D4] font-bold text-xl transition-transform group-hover:rotate-12">
            M
          </div>
          <span className="text-[#E6F1FF] font-bold text-lg md:text-xl tracking-wide hidden sm:block">
            MED AIT ALI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-[#E6F1FF] hover:text-[#00F5D4] transition-colors text-sm font-medium tracking-wide relative group"
            >
              <span className="text-[#00F5D4] mr-1 text-xs">0{index + 1}.</span>
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#00F5D4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            className="px-4 py-2 border border-[#00F5D4] text-[#00F5D4] rounded-lg hover:bg-[#00F5D4]/10 transition-colors text-sm font-medium"
          >
            CV
          </a>
        </nav>

        <button 
          className="md:hidden text-[#E6F1FF] hover:text-[#00F5D4] transition-colors z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={cn('fixed inset-0 bg-[#0A192F] z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden', isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none')}>
        <div className="flex flex-col items-center gap-6 w-full max-w-xs">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={closeMenu} 
              className="text-[#E6F1FF] hover:text-[#00F5D4] text-2xl font-medium tracking-wide py-3 w-full text-center border-b border-[#233554] last:border-0"
            >
              <span className="text-[#00F5D4] mr-3">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            onClick={closeMenu} 
            className="mt-8 px-10 py-4 border-2 border-[#00F5D4] text-[#00F5D4] rounded-lg hover:bg-[#00F5D4]/10 transition-colors text-lg font-medium w-full text-center"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;