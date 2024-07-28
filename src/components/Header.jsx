import { bag, hamburger, logo, search } from "../assets";
import { navigation2 } from "../constants";

const Header = () => {
  return (
    <div className="container">
      <div className="flex flex-row items-center h-[80px]">
        <a href="#hero" className="block">
          <img
            src={logo}
            alt="logo"
            className="w-[141.32px] h-9 xl:w-[217px] xl:h-[58.38px]"
          />
        </a>
        <div className="lg:hidden flex ml-auto">
          <img src={hamburger} alt="mobile menu" />
        </div>
        <nav className="hidden lg:flex m-auto gap-[100px] text-nowrap">
          {navigation2.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="font-semibold uppercase text-color-1"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-items-end gap-5">
          <div className="relative hidden extra-lg:block">
            <input
              type="text"
              placeholder="Лампы"
              className="text-color-1 pl-[21px] pr-[35px] border border-n-4 rounded-[88.64px] w-[170px] h-[39px]"
            />
            <img
              src={search}
              alt="search"
              className="absolute right-[13.73px] top-[8.86px]"
            />
          </div>
          <div className="relative hidden lg:block extra-lg:hidden w-[39px] h-[39px] rounded-[88.64px] bg-color-1">
            <img
              src={search}
              alt="search"
              className="absolute top-[8.86px] left-[8.86px] w-[] filter invert brightness-0 saturate-0"
            />
          </div>
          <div className="relative hidden lg:block">
            <button className="bg-color-1 w-[138px] h-[39] py-[11.5px] pl-[56.83px] pr-[19.17px] rounded-[100px]">
              Корзина
            </button>
            <img
              src={bag}
              alt="bag"
              className="absolute top-[3.5px] left-[19.17px]"
            />
            <div className="absolute top-[3px] left-9 w-[18px] h-[18px] rounded-full bg-n-1 text-n-2 text-[12px] text-center leading-[16.8px]">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
