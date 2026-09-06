import "leaflet/dist/leaflet.css";
import { use, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Coverage({ centers }) {
  const data = use(centers);
  const [position, setPosition] = useState([24.8864, 91.8807]);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    const location = data.find(
      (c) =>
        c.city.toLowerCase() === name.toLowerCase() ||
        c.district.toLowerCase() === name.toLowerCase(),
    );

    console.log(location);
    setPosition([location.latitude, location.longitude]);
  };

  return (
    <div className="max-w-3xl h-95 mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          name="search"
          type="search"
          placeholder="Search for a location..."
        />
        <button type="submit">Search</button>
      </form>
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((center, i) => (
          <Marker key={i} position={[center.latitude, center.longitude]}>
            <Popup>
              <div>
                <h3>{center.district}</h3>
                <p>{center.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Coverage;
