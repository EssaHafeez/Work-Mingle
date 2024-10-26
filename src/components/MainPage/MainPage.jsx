import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './MainPage.css';
import Painter from '../../Images/Painter.png';
import Cleaner from '../../Images/Cleaner.png';
import LocationModal from '../Locationmodel/LocationModal';
const dimensions = [
  { value: '1_marla', label: '1 Marla' },
  { value: '2_marla', label: '2 Marla' },
  { value: '2.5_marla', label: '2.5 Marla' },
  { value: '3_marla', label: '3 Marla' },
  { value: '3.5_marla', label: '3.5 Marla' },
  { value: '4_marla', label: '4 Marla' },
  { value: '5_marla', label: '5 Marla' },
  { value: '7_marla', label: '7 Marla' },
  { value: '8_marla', label: '8 Marla' },
  { value: '10_marla', label: '10 Marla' },
  { value: '1_kanal', label: '1 Kanal' },
  { value: '2_kanal', label: '2 Kanal' },
  { value: '4_kanal', label: '4 Kanal' },
  { value: '8_kanal', label: '8 Kanal' },
  { value: 'single_flat', label: 'Single Flat' },
  { value: 'double_flat', label: 'Double Flat' },
  { value: 'small_office', label: 'Small Office' },
  { value: 'medium_office', label: 'Medium Office' },
  { value: 'large_office', label: 'Large Office' },
  { value: 'small_shop', label: 'Small Shop' },
  { value: 'medium_shop', label: 'Medium Shop' },
  { value: 'large_shop', label: 'Large Shop' },
  { value: 'small_house', label: 'Small House' },
  { value: 'medium_house', label: 'Medium House' },
  { value: 'large_house', label: 'Large House' },
  { value: 'warehouse', label: 'Warehouse' },
  { value: 'factory', label: 'Factory' },
  { value: 'farmhouse', label: 'Farmhouse' },
];

const rooms = [
  { value: '1', label: '1 Room' },
  { value: '2', label: '2 Rooms' },
  { value: '3', label: '3 Rooms' },
  { value: '4', label: '4 Rooms' },
  { value: '5', label: '5 Rooms' },
  { value: '6', label: '6 Rooms' },
  { value: '7', label: '7 Rooms' },
  { value: '8', label: '8 Rooms' },
  { value: '9', label: '9 Rooms' },
  { value: '10', label: '10 Rooms' },
  { value: '12', label: '12 Rooms' },
  { value: '15', label: '15 Rooms' },
  { value: '20', label: '20 Rooms' },
  { value: 'more_than_20', label: 'More than 20 Rooms' },
];
const MainPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDimension, setSelectedDimension] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLocationSelection = (location) => {
    setSelectedLocation(location);
    setIsModalOpen(false);
  };

  return (
    <div className="main-container">
      <MapContainer
        center={[31.5204, 74.3587]} // Centered at Lahore
        zoom={13}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedLocation && (
          <Marker position={selectedLocation}></Marker>
        )}
      </MapContainer>

      <div className="options-container">
        <div className="icons-container">
          <div
            className={`icon-container ${selectedCategory === 'painter' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('painter')}
          >
            <img src={Painter} alt="Painter" className="icon" />
            <span className="icon-label">Painter</span>
          </div>
          <div
            className={`icon-container ${selectedCategory === 'cleaner' ? 'selected' : ''}`}
            onClick={() => handleCategoryClick('cleaner')}
          >
            <img src={Cleaner} alt="Cleaner" className="icon" />
            <span className="icon-label">Cleaner</span>
          </div>
        </div>
      </div>

      <div className="input-group">
        <select
          className="input-field"
          value={selectedDimension}
          onChange={(e) => setSelectedDimension(e.target.value)}
        >
          <option value="">Choose a dimension</option>
          {dimensions.map((dimension) => (
            <option key={dimension.value} value={dimension.value}>
              {dimension.label}
            </option>
          ))}
        </select>
        <select
          className="input-field"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">Choose rooms</option>
          {rooms.map((room) => (
            <option key={room.value} value={room.value}>
              {room.label}
            </option>
          ))}
        </select>
      </div>

      <div className="location-prompt" onClick={handleOpenModal}>
        <span className="location-icon">📍</span>
        <span>Choose the location on map</span>
      </div>

      <button className="find-btn">
        Find a {selectedCategory || 'painter'}
      </button>

      {selectedLocation && (
        <div className="location-display">
          <p>Selected Location:</p>
          <p>Latitude: {selectedLocation.lat.toFixed(4)}</p>
          <p>Longitude: {selectedLocation.lng.toFixed(4)}</p>
        </div>
      )}

      {isModalOpen && (
        <LocationModal 
          onClose={handleCloseModal} 
          onLocationSelect={handleLocationSelection} 
        />
      )}
    </div>
  );
};

export default MainPage;
