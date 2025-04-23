import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm z-10"></div>
      <div className="wave-background"></div>
      <div className="relative text-center max-w-4xl mx-auto px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Modern Web Development & SEO Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Transform your online presence with responsive, high-performance websites and expert SEO strategies tailored to your business.
        </p>
        <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get Started
        </a>
      </div>
    </section>
  );
}