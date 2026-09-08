import "leaflet/dist/leaflet.css";
import { use } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SearchControl from "./SearchControl";

function Coverage({ centers }) {
  const data = use(centers);

  return (
    <div className="max-w-3xl h-95 mx-auto">
      <MapContainer
        center={[24.8949, 91.8662]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <div className="absolute top-4 left-12 z-1000 bg-white  ">
          <SearchControl data={data} />
        </div>
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
