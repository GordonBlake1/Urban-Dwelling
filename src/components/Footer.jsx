import { whitelogo } from "../assets";
import { address, contacts, paymentMethodLogos, services } from "../constants";

const Footer = () => {
  return (
    <div className="w-full bg-color-4">
      <div className="container bg-color-4 lg:flex lg:justify-between">
        <div className="lg:flex lg:flex-col">
          <div className="pt-10 md:pt-[50px] lg:pt-[64px] mb-[34.23px] md:mb-[33.23px] lg:mb-[55.52px] ml-1">
            <a href="#hero" className="block">
              <img
                src={whitelogo}
                alt="logo"
                className="w-[180px] h-[46.77px] xl:w-[217px] xl:h-[58.38px] "
              />
            </a>
          </div>

          <div className="hidden lg:block pb-[60px] max-w-xs">
            <p className="footer-links leading-[20.8px] text-n-3 font-roboto">
              Этот сайт защищен от спама службой reCAPTCHA Google.{" "}
              <a href="#policy" className="underline">
                Политика конфиденциальности/Условия предоставления услуг
              </a>
            </p>
          </div>
        </div>

        <div className="md:flex md:justify-between lg:mt-[60px]">
          <div className="mb-[30px] lg:mb-0 lg:mr-[82px]">
            <p className="h4 mb-[10px] md:mb-[20px]">{address.title}</p>
            <p className="footer-links leading-[24px] md:mb-[70px] lg:mb-[38px]">
              {address.text}
            </p>
            <div className="hidden mb-[72px] md:flex md:flex-col lg:hidden">
              <a
                href="#public-offer"
                className="footer-links mb-5 leading-[22.4px] text-n-3"
              >
                Публичная оферта
              </a>
              <a
                href="#data-policy"
                className="footer-links leading-[22.4px] text-n-3"
              >
                Политика персональных данных
              </a>
            </div>
            <div className="hidden lg:block">
              <p className="h4 mb-[20px]">{contacts.title}</p>
              <p className="footer-links mb-[25px]">{contacts.email}</p>
              <p className="footer-links">{contacts.number}</p>
            </div>
          </div>
          <div className="mb-[30px] lg:hidden">
            <p className="h4 mb-[10px] md:mb-[20px]">{contacts.title}</p>
            <p className="footer-links mb-[25px]">{contacts.email}</p>
            <p className="footer-links">{contacts.number}</p>
          </div>

          <div className="mb-[30px]">
            <p className="h4 mb-5">Услуги</p>
            {services.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="footer-links flex flex-col mb-5"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-col">
          <div className="mb-[72px] flex flex-col md:hidden lg:flex lg:flex-col lg:mt-[62px] lg:text-right">
            <a
              href="#public-offer"
              className="footer-links mb-5 leading-[22.4px] text-n-3"
            >
              Публичная оферта
            </a>
            <a
              href="#data-policy"
              className="footer-links leading-[22.4px] text-n-3"
            >
              Политика персональных данных
            </a>
          </div>
          <div className="md:flex lg:ml-auto">
            <div className="flex flex-row items-center gap-[33px] mb-[30px] md:w-2/5 lg:w-full">
              {paymentMethodLogos.map((logo) => (
                <a key={logo.id} href={logo.url}>
                  <img src={logo.img} alt={logo} />
                </a>
              ))}
            </div>
            <div className="pb-10 md:w-3/5 lg:hidden">
              <p className="footer-links leading-[20.8px] text-n-3 font-roboto">
                Этот сайт защищен от спама службой reCAPTCHA Google.{" "}
                <a href="#policy" className="underline">
                  Политика конфиденциальности/Условия предоставления услуг
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
