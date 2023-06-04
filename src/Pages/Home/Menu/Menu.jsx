import SectionTitle from "../../../conponents/SectionTitle/SectionTitle";
import "./Menu.css";
import menuImg from "../../../assets/home/featured.jpg";

const Menu = () => {
  return (
    <div className="mb-28 menu-bg p-10 md:p-20 text-white">
      <SectionTitle subHeading={"Check it out"} heading={"our menu"} />
      <div className="md:flex justify-center items-center md:w-4/5 mx-auto">
        <img src={menuImg} alt="" className="md:w-2/5" />
        <div className="md:px-10 text-center md:text-left">
          {" "}
          <h3 className="text-3xl uppercase my-3">our menu</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dicta
            quidem ea aliquam doloribus praesentium perferendis eius molestias.
            Sunt, minima qui inventore earum assumenda minus quisquam ea placeat
            aut laudantium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
