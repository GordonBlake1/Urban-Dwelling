import { navigation } from "../constants";

const Hat = () => {
  return (
    <div className="hidden w-full lg:block bg-color-1 text-n-1 h-[40px]">
      <div className="container flex items-center justify-end gap-[70px] py-3">
        {navigation.map((item) => (
          <a key={item.id} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hat;
