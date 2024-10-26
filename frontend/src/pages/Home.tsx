import React from 'react';
import { ArrowRight, Leaf, Battery, Cpu, Recycle, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="E-waste"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Turn Your E-Waste Into Rewards
            </h1>
            <p className="text-xl mb-8">
              Join thousands of eco-conscious individuals in making a difference. 
              Recycle your e-waste and earn points while saving the planet.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Start Recycling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/centers"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Find Centers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Join our mission to create a cleaner, more sustainable future through responsible e-waste recycling
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Recycle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
            <p className="text-gray-600">
              Book a convenient pickup time for your e-waste from your doorstep
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
            <p className="text-gray-600">
              Get rewarded with points for every item you recycle with us
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Redeem Rewards</h3>
            <p className="text-gray-600">
              Convert your points into exciting rewards and discounts
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-green-100">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-green-100">Items Recycled</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-green-100">Collection Centers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-green-100">Trees Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Items */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Accept</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: 'Computers', desc: 'Laptops, Desktops, Servers' },
            { icon: Battery, title: 'Batteries', desc: 'All types of batteries' },
            { icon: Leaf, title: 'Mobile Devices', desc: 'Phones, Tablets, Watches' },
            { icon: Recycle, title: 'Other E-Waste', desc: 'Printers, Cables, Parts' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <item.icon className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Recycling?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of eco-warriors and make a positive impact on the environment
          </p>
          <Button size="lg">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;