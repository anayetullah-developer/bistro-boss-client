import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Bistro Boss</title>
      </Helmet>
      <Slider />
      <Category />
      <FeaturedSection />
      <CallUs />
      <Menu />
      <Testimonials />
    </div>
  );
};

export default Home;
