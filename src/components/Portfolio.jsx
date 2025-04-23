export default function Portfolio() {
    const projects = [
      {
        title: 'Dishtalgia',
        description: 'A nostalgic restaurant website with a modern design, featuring banana pudding products and robust SEO optimization.',
        image: '/images/dishtalgia-screenshot.jpg',
        url: 'https://dishtalgia.com',
      },
      {
        title: 'NeonBites',
        description: 'A futuristic food truck website with a vibrant design, email capture system, and seamless user experience.',
        image: '/images/NeonBites-Screenshot.jpg',
        url: 'https://neon-bites-food.vercel.app/',
      },
      {
        title: 'Thynk Cafe',
        description: 'A custom e-commerce platform with advanced SEO and responsive design for optimal performance.',
        image: '/images/ThynkCafe-Screenshot.jpg',
        url: 'https://restaurant-9xcg.onrender.com/',
      },
      {
        title: 'Food Genie',
        description: 'A custom e-commerce platform with advanced SEO and responsive design for optimal performance.',
        image: '/images/foodgenie-Screenshot.jpg',
        url: 'https://foodgenie-vfnm.onrender.com/',
      },
      {
        title: 'Satisfynds',
        description: 'A custom e-commerce platform with advanced SEO and responsive design for optimal performance.',
        image: '/images/satisfynds-Screenshot.jpg',
        url: 'https://satisfinds-frontend-v2.onrender.com/',
      },
      {
        title: 'LegalPixel Pros',
        description: 'A custom e-commerce platform with advanced SEO and responsive design for optimal performance.',
        image: '/images/legal-pixel-pro-screenshot.jpg',
        url: 'https://legal-pixel.vercel.app/',
      },
      
    ];
  
    return (
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }