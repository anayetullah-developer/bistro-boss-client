const MenuCard = ({ img, title, subtitle }) => {
  return (
    <div className="relative">
      <div>
        <img src={img} alt="" style={{ height: "700px", minWidth: "1240px" }} />
        <div className="bg-black bg-opacity-70 text-white md:w-3/5 p-8 md:p-16 mx-5 md:mx-0 absolute top-1/3 md:left-1/4">
          <h2 className="uppercase text-4xl text-center mb-5">{title}</h2>
          <p className="text-center">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
