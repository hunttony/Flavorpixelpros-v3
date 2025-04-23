export default function Services() {
    const services = [
      {
        title: 'Web Development',
        description: 'Custom, responsive websites built with modern technologies like React and Vite for performance and scalability.',
      },
      {
        title: 'SEO Optimization',
        description: 'Comprehensive SEO strategies including keyword research, on-page optimization, and technical SEO to boost rankings.',
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing support to keep your website secure, updated, and performing at its best.',
      },
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }