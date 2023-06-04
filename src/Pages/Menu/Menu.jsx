import MenuCard from "../../conponents/SectionTitle/MenuCard/MenuCard";
import image1 from "../../assets/menu/banner3.jpg";
import image2 from "../../assets/menu/dessert-bg.jpeg";
import image3 from "../../assets/menu/pizza-bg.jpg";
import image4 from "../../assets/menu/salad-bg.jpg";
import image5 from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../conponents/SectionTitle/SectionTitle";
import MenuListCard from "../../conponents/MenuListCard/MenuListCard";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const offered = menu.filter(
    (singleMenu) => singleMenu.category === "offered"
  );
  const dessert = menu.filter(
    (singleMenu) => singleMenu.category === "dessert"
  );
  const pizza = menu.filter((singleMenu) => singleMenu.category === "pizza");
  const salad = menu.filter((singleMenu) => singleMenu.category === "salad");
  const soup = menu.filter((singleMenu) => singleMenu.category === "soup");
  return (
    <div>
      <MenuCard
        title={"our menu"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={image1}
      />

      <SectionTitle subHeading={"don't miss"} heading={"Today's Offer"} />

      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {offered.map((singleMenu) => (
            <MenuListCard
              key={singleMenu._id}
              menu={singleMenu}
              image={image3}
            />
          ))}
        </div>
        <Link to="order/offered"><button className="btn bg-transparent border-0 text-slate-950 hover:text-white border-b-2 mt-10">Order your favorite food</button></Link>
      </div>

      <MenuCard
        title={"dessert"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={image2}
      />
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {dessert.map((singleMenu) => (
            <MenuListCard
              key={singleMenu._id}
              menu={singleMenu}
              image={image3}
            />
          ))}
        </div>
        <Link to="/order/dessert"><button className="btn bg-transparent border-0 text-slate-950 hover:text-white border-b-2 mt-10">Order your favorite food</button></Link>
      </div>
      <MenuCard className="mb-20"
        title={"pizza"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={image3}
      />
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {pizza.map((singleMenu) => (
            <MenuListCard
              key={singleMenu._id}
              menu={singleMenu}
              image={image3}
            />
          ))}
        </div>
        <Link to="/order/pizza"><button className="btn bg-transparent border-0 text-slate-950 hover:text-white border-b-2 mt-10">Order your favorite food</button></Link>
      </div>
      <MenuCard
        title={"salad"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={image4}
      />
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {salad.map((singleMenu) => (
            <MenuListCard
              key={singleMenu._id}
              menu={singleMenu}
              image={image3}
            />
          ))}
        </div>
        <Link to="/order/salad"><button className="btn bg-transparent border-0 text-slate-950 hover:text-white border-b-2 mt-10">Order your favorite food</button></Link>
      </div>
      <MenuCard
        title={"soup"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={image5}
      />
      <div className="mb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {soup.map((singleMenu) => (
            <MenuListCard
              key={singleMenu._id}
              menu={singleMenu}
              image={image3}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/order/soup"><button className="btn bg-transparent border-0 text-slate-950 hover:text-white border-b-2 mt-10">Order your favorite food</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
