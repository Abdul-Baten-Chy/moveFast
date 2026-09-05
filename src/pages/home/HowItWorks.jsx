import icon from "../../assets/bookingIcon.png";
function HowItWorks() {
  return (
    <div className=" mt-20">
      <h2 className="text-4xl font-extrabold">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col p-9 bg-white rounded-3xl ">
          <img src={icon} alt="Booking Icon" className="mb-6  w-14 h-14 " />
          <h3 className="text-xl font-bold mb-4">Booking Pick & Drop</h3>
          <p className="text-medium">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="flex flex-col p-9 bg-white rounded-3xl ">
          <img src={icon} alt="Booking Icon" className="mb-6  w-14 h-14" />
          <h3 className="text-xl font-bold mb-4">Booking Pick & Drop</h3>
          <p className="text-medium">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="flex flex-col p-9 bg-white rounded-3xl ">
          <img src={icon} alt="Booking Icon" className="mb-6 w-14 h-14" />
          <h3 className="text-xl font-bold mb-4">Booking Pick & Drop</h3>
          <p className="text-medium">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="flex flex-col p-9 bg-white rounded-3xl ">
          <img src={icon} alt="Booking Icon" className="mb-6 w-14 h-14" />
          <h3 className="text-xl font-bold mb-4">Booking Pick & Drop</h3>
          <p className="text-medium">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
