import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuCard from "../../conponents/SectionTitle/MenuCard/MenuCard";
import banner from "../../assets/shop/banner2.jpg";
import FoodCard from "../../conponents/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [menu] = useMenu(); 
    console.log(menu)
    const dessert = menu.filter(singleMenu => singleMenu.category === "dessert")
    const pizza = menu.filter(singleMenu => singleMenu.category === "pizza")
    const salad = menu.filter(singleMenu => singleMenu.category === "salad")
    const soup = menu.filter(singleMenu => singleMenu.category === "soup")
    const drinks = menu.filter(singleMenu => singleMenu.category === "drinks")

    const [tabIndex, setTabIndex] = useState(initialIndex)
  return (
    <div>
      <MenuCard
        title={"our menu"}
        subtitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci eos neque in veniam eius odio repellat aliquid minus blanditiis"
        }
        img={banner}
      />
      <Tabs className="my-20" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {salad.map((singleMenu) => (
              <FoodCard
                key={singleMenu._id}
                menu={singleMenu}
                image={banner}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-5 mb-20">
            {pizza.map((singleMenu) => (
              <FoodCard
                key={singleMenu._id}
                menu={singleMenu}
                image={banner}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-5 mb-20">
            {soup.map((singleMenu) => (
              <FoodCard
                key={singleMenu._id}
                menu={singleMenu}
                image={banner}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-5 mb-20">
            {dessert.map((singleMenu) => (
              <FoodCard
                key={singleMenu._id}
                menu={singleMenu}
                image={banner}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-3 gap-5 mb-20">
            {drinks.map((singleMenu) => (
              <FoodCard
                key={singleMenu._id}
                menu={singleMenu}
                image={banner}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
