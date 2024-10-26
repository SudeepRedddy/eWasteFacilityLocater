import React from 'react';
import { Users, Package, Clock, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const BusinessDashboard = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="mt-2 text-gray-600">EcoRecycle Solutions Center</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Users className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">847</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Package className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Items Processed</h3>
            <p className="text-3xl font-bold text-green-600">1,392</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Clock className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Pending Requests</h3>
            <p className="text-3xl font-bold text-yellow-600">12</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <TrendingUp className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Monthly Growth</h3>
            <p className="text-3xl font-bold text-purple-600">24%</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Pending Pickups</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Package className="h-6 w-6 text-gray-600" />
                    <div>
                      <p className="font-medium">Pickup Request #{i}234</p>
                      <p className="text-sm text-gray-600">2 laptops, 1 printer</p>
                    </div>
                  </div>
                  <Button size="sm">Approve</Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Recent Activity</h3>
              <Button variant="outline" size="sm">Export</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-gray-600" />
                  <div>
                    <p className="font-medium">User #{i}521 recycled items</p>
                    <p className="text-sm text-gray-600">150 points awarded</p>
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

export default BusinessDashboard;