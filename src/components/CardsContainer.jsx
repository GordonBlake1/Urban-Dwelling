import Card from "./Card";
import { products } from "../constants";

const CardsContainer = () => {
  return (
    <div className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] gap-y-[30px] md:gap-10 md:gap-y-[50px] mb-10 md:mb-[50px] lg:mb-[60px]">
      {products.map((item) => (
        <div key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
