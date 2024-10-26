import React from 'react';
import { ArrowRight, Leaf, Battery, Cpu, Recycle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-20 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
  <video
    className="absolute inset-0 w-full h-full object-cover opacity-70"
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

  {/* Stronger Black Tint Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
    <h1 className="text-5xl font-bold mb-4 leading-tight">
      Transform Your E-Waste <br /> Into Eco-Points
    </h1>
    <p className="text-xl mb-6 max-w-lg">
      Join the mission to make a difference. Recycle, redeem, and help save the planet!
    </p>
    <div className="flex space-x-4">
      <Link
        to="/login"
        className="inline-flex items-center bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:bg-green-800"
      >
        Start Recycling
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        to="/centers"
        className="inline-flex items-center bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-gray-100"
      >
        Find Centers
      </Link>
    </div>
  </div>
</section>


      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
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
              className="text-center bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Active Users' },
              { value: '50K+', label: 'Items Recycled' },
              { value: '100+', label: 'Collection Centers' },
              { value: '500+', label: 'Trees Saved' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-lg shadow-lg bg-green-700 transition-all duration-300 transform hover:scale-105 hover:bg-green-800">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-green-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Accepted Items</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: 'Computers', desc: 'Laptops, Desktops, Servers' },
            { icon: Battery, title: 'Batteries', desc: 'All types of batteries' },
            { icon: Leaf, title: 'Mobile Devices', desc: 'Phones, Tablets, Watches' },
            { icon: Recycle, title: 'Other E-Waste', desc: 'Printers, Cables, Parts' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <item.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Recycling?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community and make a difference today!
          </p>
          <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
