
const MenuListCard = ({menu, image}) => {
    const {category, _id, name, price, recipe} = menu;
  return (
    <div>
      <div className="bg-base-200 p-4">
        <div className="flex">
        <img src={image} alt="" className="mr-5" style={{width: "118px", height: "118px", borderRadius: "0px 200px 200px 200px"}}/>
          <div>
            <h1 className="text-3xl">{name}</h1> <span>{price}</span>
            <p className="py-2">
                {recipe}
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MenuListCard;
