import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Testimonial = fetch("/reviews.json").then((res) => {
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
});

function Reviews() {
  const customerReviews = use(Testimonial);
  if (!customerReviews || customerReviews.length === 0) {
    return <p className="text-center py-8 text-gray-500">No reviews found.</p>;
  }

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper mt-20 max-h-75 mb-20"
    >
      {customerReviews.length > 0 &&
        customerReviews.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewCard item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Reviews;
