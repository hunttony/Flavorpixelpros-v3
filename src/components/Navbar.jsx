import { useEffect } from 'react';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-gray-800/90 backdrop-blur-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400">FlavorPixelPros</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#home" className="block px-3 py-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#portfolio" className="block px-3 py-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
            <a href="#services" className="block px-3 py-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}