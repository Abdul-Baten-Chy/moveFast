import bgimage from "../../assets/be-a-merchant-bg.png";
import image from "../../assets/location-merchant.png";

function Merchant() {
  return (
    <div
      className="mt-20 bg-[#03373D] text-white p-6 sm:p-10 lg:p-14 rounded-3xl bg-no-repeat bg-top bg-cover sm:bg-contain relative overflow-hidden"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* মোবাইল গ্রিড/ফ্লেক্স: মোবাইলে উপরে-নিচে (col), বড় স্ক্রিনে পাশাপাশি (row) */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* বাম পাশের কনটেন্ট ও বাটন */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* বাটনগুলোকে কনটেন্টের ভেতরেই ফ্লেক্স দিয়ে রাখা হয়েছে */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-[#CAEB66] py-3.5 px-6 rounded-full text-black font-medium hover:bg-[#b8d855] transition-all">
              Become a Merchant
            </button>
            <button className="w-full sm:w-auto border border-[#CAEB66] py-3.5 px-6 rounded-full text-[#CAEB66] font-medium hover:bg-[#CAEB66]/10 transition-all">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* ডান পাশের ইলুস্ট্রেশন ইমেজ */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src={image}
            alt="Merchant Location Illustration"
            className="w-full max-w-[320px] sm:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Merchant;
