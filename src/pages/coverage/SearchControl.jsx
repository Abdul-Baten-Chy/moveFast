import { useMap } from "react-leaflet";

function SearchControl({ data }) {
  const map = useMap();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    const location = data.find(
      (c) =>
        c.city.toLowerCase().includes(name.toLowerCase()) ||
        c.district.toLowerCase().includes(name.toLowerCase()),
    );
    map && map.flyTo([location.latitude, location.longitude], 13);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        type="search"
        placeholder="Search for a location..."
        className="border border-gray-300 rounded-full px-2 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchControl;
