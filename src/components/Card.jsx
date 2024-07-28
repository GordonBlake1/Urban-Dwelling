import PropTypes from "prop-types";

const Card = ({ item }) => {
  return (
    <>
      <div className="relative mb-[10px] md:mb-[20px] group">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full max-w-[20rem] object-cover rounded-[20px]"
        />
        {item.onSale && (
          <button className="hidden md:block absolute top-[10px] left-[10px] text-[16px] leading-[22.4px] bg-color-1 text-n-1 font-semibold py-2 px-[39.5px] rounded-[100px]">
            Акция
          </button>
        )}
        <div className="absolute bottom-0 left-0 w-full h-[88px] bg-n-4 bg-opacity-70 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
          <button className="bg-color-2 text-n-1 font-semibold py-[13px] px-[86.5px] rounded-[100px]">
            Подробнее
          </button>
        </div>
      </div>
      <p className="md:font-bold text-color-1 md:text-[16px] md:leading-[25.2px] mb-[11px] font-medium leading-[22.4px]">
        {item.title}
      </p>
      <p className="md:font-semibold md:text-[22px] md:leading-[30.8px] text-color-2 text-[16px] leading-[22.4px] text-nowrap">
        {item.price}
        {item.prevPrice && (
          <span className="md:font-semibold md:text-[22px] md:leading-[30.8px] text-n-3 ml-4 line-through text-[16px] leading-[22.4px] text-nowrap">
            {item.prevPrice}
          </span>
        )}
      </p>
    </>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    prevPrice: PropTypes.string,
    onSale: PropTypes.bool,
  }).isRequired,
};

export default Card;
