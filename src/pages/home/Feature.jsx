import image1 from "../../assets/live-tracking.png";
import image2 from "../../assets/safe-delivery.png";
function Feature() {
  return (
    <div className="my-20 border-b-2 border-gray-400 pb-14 border-dashed">
      <div className="flex items-center gap-8 bg-white mb-6 rounded-2xl p-6">
        <img src={image1} alt="Live Tracking" />
        <div className="p-6 border-l-2 border-dashed border-gray-400">
          <h4 className="text-2xl font-extrabold">Live Parcel Tracking</h4>
          <p className="text-sm font-medium mt-5">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white mb-6 rounded-2xl p-6">
        <img src={image2} alt="Safe Delivery" />
        <div className="p-6 border-l-2 border-dashed border-gray-400">
          <h4 className="text-2xl font-extrabold">Safe Delivery</h4>
          <p className="text-sm font-medium mt-5">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 bg-white mb-6 rounded-2xl p-6">
        <img src={image2} alt="Safe Delivery" />
        <div className="p-6 border-l-2 border-dashed border-gray-400">
          <h4 className="text-2xl font-extrabold">Safe Delivery</h4>
          <p className="text-sm font-medium mt-5">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
