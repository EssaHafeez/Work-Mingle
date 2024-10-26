import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './LocationModal.css';

const LocationModal = ({ onClose, onLocationSelect }) => {
  const [mapLocation, setMapLocation] = useState(null);
  const [error, setError] = useState('');

  const handleLocationSelection = (location) => {
    setMapLocation(location);
    onLocationSelect(location);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const location = e.latlng;
        setMapLocation(location);
        handleLocationSelection(location);
      },
    });
    return null;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Choose Location</h2>
        
        <MapContainer
          center={[31.5204, 74.3587]} 
          zoom={13}
          scrollWheelZoom={false}
          className="modal-map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {mapLocation && <Marker position={mapLocation}></Marker>}
          <MapClickHandler />
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationModal;
