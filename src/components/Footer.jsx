export default function Footer() {
    return (
      <footer className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Flavor Pixel Pros. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }