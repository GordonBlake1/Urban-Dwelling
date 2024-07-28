import { mastercard, mir, visa, lamp, whitelamp, arglamp } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Доставка",
    url: "#delivery",
  },
  {
    id: "1",
    title: "Гарантия и возврат",
    url: "#warranty-and-return",
  },
  {
    //make the button interactive, switches the language of the page, probably a separate component
    id: "2",
    title: "EN",
    url: "",
  },
];

export const navigation2 = [
  {
    id: "0",
    title: "Каталог",
    url: "#catalog",
  },
  {
    id: "1",
    title: "О компании",
    url: "#about",
  },
  {
    id: "2",
    title: "Контакты",
    url: "#contacts",
  },
];

export const address = {
  title: "Адрес",
  text: "Текст, Текст, Текст",
};

export const contacts = {
  title: "Контакты",
  email: "Email: urban.dwelling@yandex.com",
  number: "Телефон: 8(999)999-99-99",
};

export const services = [
  {
    id: "0",
    title: "Каталог",
    url: "#catalog",
  },
  {
    id: "1",
    title: "О компании",
    url: "#about",
  },
  {
    id: "2",
    title: "Контакты",
    url: "#contacts",
  },
  {
    id: "3",
    title: "Доставка и оплата",
    url: "#delivery",
  },
  {
    id: "4",
    title: "Гарантия и возврат",
    url: "#warranty-and-return",
  },
];

export const products = [
  {
    id: "0",
    title: "Встраиваемый светильник Markt",
    price: "3 490₽",
    prevPrice: "5 060₽",
    onSale: true,
    img: lamp,
  },
  {
    id: "1",
    title: "Линейный светильник ARG",
    price: "6 700₽",
    prevPrice: "",
    onSale: false,
    img: arglamp,
  },
  {
    id: "2",
    title: "Сведодиодный светильник",
    price: "5 060₽",
    prevPrice: "6 060₽",
    onSale: true,
    img: whitelamp,
  },
  {
    id: "3",
    title: "Встраиваемый светильник Markt",
    price: "3 490₽",
    prevPrice: "",
    onSale: false,
    img: lamp,
  },
  {
    id: "4",
    title: "Линейный светильник ARG",
    price: "6 060₽",
    prevPrice: "6 700₽",
    onSale: true,
    img: arglamp,
  },
  {
    id: "5",
    title: "Сведодиодный светильник",
    price: "5 060₽",
    prevPrice: "",
    onSale: false,
    img: whitelamp,
  },
  {
    id: "6",
    title: "Встраиваемый светильник Markt",
    price: "3 490₽",
    prevPrice: "6 060₽",
    onSale: true,
    img: lamp,
  },
  {
    id: "7",
    title: "Линейный светильник ARG",
    price: "6 700₽",
    prevPrice: "",
    onSale: false,
    img: arglamp,
  },
];

export const paymentMethodLogos = [
  {
    id: "0",
    img: mir,
    url: "",
  },
  {
    id: "1",
    img: visa,
    url: "",
  },
  {
    id: "2",
    img: mastercard,
    url: "",
  },
];
