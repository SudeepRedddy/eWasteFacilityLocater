import React from 'react';
import { ArrowRight, Leaf, Battery, Cpu, Recycle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import IndiaMapImage from '../vdo/img.png';
import SustainabilityDiagram from '../vdo/img2.png';

const Home = () => {
  const upcomingCities = ['Bhopal', 'Indore', 'Raipur', 'Nagpur', 'Lucknow'];
  const operationalCities = ['Mumbai', 'Pune', 'Bangalore', 'Hyderabad', 'Ahmedabad'];

  return (
    <div className="space-y-20 font-sans bg-black text-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
        >
          <source
            src="https://www.thekabadiwala.com/images/landing/hero-video-mp4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-gray-100">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Transform Your E-Waste <br /> Into Eco-Points
          </h1>
          <p className="text-xl mb-6 max-w-lg text-gray-300">
            Join the mission to make a difference. Recycle, redeem, and help save the planet!
          </p>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="inline-flex items-center bg-green-600 text-gray-100 px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:bg-green-700"
            >
              Start Recycling
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/centers"
              className="inline-flex items-center bg-zinc-900 text-green-400 px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-zinc-800"
            >
              Find Centers
            </Link>
          </div>
        </div>
      </section>

      {/* Presence Section */}
      <section className="bg-black text-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-green-600">Presence</span><br />
                Across Nation
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                The EcoRecycle has established its services in {operationalCities.length} major cities of India and is now
                expanding its reach in other parts of the country.
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {operationalCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full border border-green-800"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {upcomingCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-zinc-900 text-zinc-400 rounded-full border border-zinc-800 flex items-center"
                    >
                      {city}
                      <span className="text-xs ml-2 text-amber-500">coming soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={IndiaMapImage}
                alt="India Map"
                className="w-full opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section - Corrected */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={SustainabilityDiagram}
              alt="Sustainability Diagram"
              className="w-3/4 mx-auto"
            />
          </div>
          <div>
            <p className="text-gray-400 mb-2">Our Eco-System Towards</p>
            <h2 className="text-5xl font-bold mb-6">
              Sustainability &<br />
              Circular Economy
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              The EcoRecycle with its acute understanding of waste has developed
              sustainable strategies & techniques to manage waste efficiently & cost-
              efficaciously contributing in closing the loop of product life cycle & attain
              <span className="text-green-500"> circular economy</span> while infusing <span className="text-green-500">sustainability</span> into lives.
            </p>
            <Link
              to="/learn-more"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Presence Section - Moving after Sustainability
      <section className="bg-black text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Our <span className="text-green-600">Presence</span><br />
                Across Nation
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                The EcoRecycle has established its services in {operationalCities.length} major cities of India and is now
                expanding its reach in other parts of the country.
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {operationalCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-green-900/30 text-green-400 rounded-full border border-green-800"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {upcomingCities.map((city) => (
                    <span
                      key={city}
                      className="px-4 py-2 bg-zinc-900 text-zinc-400 rounded-full border border-zinc-800 flex items-center"
                    >
                      {city}
                      <span className="text-xs ml-2 text-amber-500">coming soon</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={IndiaMapImage}
                alt="India Map"
                className="w-full rounded-lg opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section> */}
      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-100">How It Works</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Discover how easy it is to join our eco-friendly movement and start earning rewards.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: Recycle, title: 'Schedule Pickup', desc: 'Choose a time for easy e-waste pickup.' },
            { icon: TrendingUp, title: 'Earn Points', desc: 'Earn rewards for every item recycled.' },
            { icon: Award, title: 'Redeem Rewards', desc: 'Exchange points for exciting offers.' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-zinc-900 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-zinc-800"
            >
              <div className="bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats
      <section className="bg-zinc-900 text-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '50K+', label: 'Items Recycled' },
              { value: '100+', label: 'Collection Centers' },
              { value: '500+', label: 'Trees Saved' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg shadow-lg bg-black transition-all duration-300 transform hover:scale-105 hover:bg-zinc-800">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Accepted Items */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Accepted Items</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: 'Computers', desc: 'Laptops, Desktops, Servers' },
            { icon: Battery, title: 'Batteries', desc: 'All types of batteries' },
            { icon: Leaf, title: 'Mobile Devices', desc: 'Phones, Tablets, Watches' },
            { icon: Recycle, title: 'Other E-Waste', desc: 'Printers, Cables, Parts' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-zinc-800"
            >
              <item.icon className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">Ready to Start Recycling?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and make a difference today!
          </p>
          <Link to="/login">
            <Button
              size="lg"
              className="bg-green-600 text-gray-100 hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-black text-gray-100 py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Business Column */}
            <div>
              <h3 className="text-green-500 text-lg font-semibold mb-4">Businesses</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-green-400">EPR</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Circular Economy</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Paper Shredding</Link></li>
              </ul>
            </div>

            {/* Individuals Column */}
            <div>
              <h3 className="text-green-500 text-lg font-semibold mb-4">Individuals</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Scrap Collection</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Vehicle Scrapping</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Zero Waste Society</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-green-500 text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-green-400">About Us</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Careers</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Franchise</Link></li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h3 className="text-green-500 text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Contact Us</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Privacy Policy</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-green-400">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div>
              <span>EcoRecycle</span>
              {/* <img src="/logo.png" alt="The Kabadiwala" className="h-8 mb-4" /> */}
              <div className="space-y-2 text-gray-300 text-sm">
                <p>+91-99999 99999</p>
                <p>contact@ecorecycle.com</p>
                <p>The EcoRecycle,Hyderabad </p>
                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  <a href="https://instagram.com" className="text-gray-400 hover:text-green-400">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" className="text-gray-400 hover:text-green-400">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-green-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </footer>
    </div>

  );

};


export default Home;