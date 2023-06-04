const FoodCard = ({menu, image}) => {
  const handleCart = () => {
    console.log(menu)
  }
    const {category, _id, name, price, recipe} = menu;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn border-0 border-b-2 border-yellow-600 text-yellow-600 bg-transparent uppercase" onClick={handleCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
