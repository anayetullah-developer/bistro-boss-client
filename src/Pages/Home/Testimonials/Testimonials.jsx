import SectionTitle from "../../../conponents/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  return (
    <div className="mb-28">
      <SectionTitle
        subHeading={"What our clients say"}
        heading={"Testimonials"}
      />

     <div className="flex justify-center mb-8"> <Rating style={{ maxWidth: 180 }} value={5} /></div>

      <p className="flex justify-center">
        <FaQuoteLeft className="text-6xl mb-4" />
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="md:px-32 px-10">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          <h3 className="text-xl text-center uppercase text-yellow-600 md:mt-0 mt-7">
            Jane doe
          </h3>
        </SwiperSlide>
        <SwiperSlide className="md:px-32 px-10">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          <h3 className="text-xl text-center uppercase text-yellow-600 md:mt-0 mt-7">
            Jane doe
          </h3>
        </SwiperSlide>
        <SwiperSlide className="md:px-32 px-10">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          <h3 className="text-xl text-center uppercase text-yellow-600 md:mt-0 mt-7">
            Jane doe
          </h3>
        </SwiperSlide>
        <SwiperSlide className="md:px-32 px-10">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
          <h3 className="text-xl text-center uppercase text-yellow-600 md:mt-0 mt-7">
            Jane doe
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
