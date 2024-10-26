import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Button from '../components/Button';
import Input from '../components/Input';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Sample recycling centers data
const centers = [
  { id: 1, name: 'EcoRecycle Center', lat: 40.7128, lng: -74.0060, address: '123 Green St, NY' },
  { id: 2, name: 'GreenTech Recycling', lat: 40.7300, lng: -73.9950, address: '456 Earth Ave, NY' },
  { id: 3, name: 'E-Waste Solutions', lat: 40.7200, lng: -74.0100, address: '789 Eco Blvd, NY' },
];

const Centers = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    // Request user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to New York City coordinates if location access is denied
          setUserLocation([40.7128, -74.0060]);
        }
      );
    }
  }, []);

  if (!userLocation) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Recycling Centers</h1>
          <p className="mt-2 text-gray-600">Find e-waste recycling centers near you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-4">
            <Input
              label=""
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              placeholder="Enter your location"
              className="flex-1"
            />
            <Button>
              <MapPin className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px]">
              <MapContainer
                center={userLocation}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {centers.map((center) => (
                  <Marker key={center.id} position={[center.lat, center.lng]}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-semibold">{center.name}</h3>
                        <p className="text-sm text-gray-600">{center.address}</p>
                        <Button size="sm" className="mt-2">Schedule Pickup</Button>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="space-y-4">
            {centers.map((center) => (
              <div key={center.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold">{center.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{center.address}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">Get Directions</Button>
                  <Button size="sm">Schedule Pickup</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centers;