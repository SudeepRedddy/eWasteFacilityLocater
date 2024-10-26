import React from 'react';
import { Award, Package, Clock, MapPin } from 'lucide-react';
import Button from '../components/Button';

const UserDashboard = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back, John Doe</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Award className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Recycling Points</h3>
            <p className="text-3xl font-bold text-green-600">1,250</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Package className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Items Recycled</h3>
            <p className="text-3xl font-bold text-blue-600">27</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Clock className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Pending Pickups</h3>
            <p className="text-3xl font-bold text-purple-600">2</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Activity</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Package className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium">Recycled 2 laptops</p>
                    <p className="text-sm text-gray-600">March {i + 10}, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Nearby Centers</h3>
              <Button variant="outline" size="sm">View Map</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium">EcoRecycle Center {i}</p>
                    <p className="text-sm text-gray-600">2.{i} miles away</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;