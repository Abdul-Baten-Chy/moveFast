import Card from "./Card";
import { servicesData } from "./data";
function Ourservice() {
  return (
    <div className="p-20 bg-neutral rounded-4xl text-white mt-20">
      <h2 className="text-4xl font-extrabold text-center">Our Services</h2>
      <p className="max-w-179.5 text-center mt-4 text-[16px] font-medium  mx-auto">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 text-black md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            icon={service.icon}
            bgColor={service.bgColor}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Ourservice;
