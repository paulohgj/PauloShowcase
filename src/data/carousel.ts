import { Carousel } from "../types/Carousel";

import driveOn from "../img/carousel/driveOn.png";
import lojaCarros from "../img/carousel/lojaCarros.png";
import portfolio1 from "../img/carousel/portfolio.png";
import clock from "../img/carousel/clock.png";

export const carousel: Carousel[] = [
  {
    id: 1,
    name: "DriveOn",
    img: driveOn,
    link: "https://paulohgj.github.io/DriveOn/",
  },
  {
    id: 2,
    name: "Loja de Carros",
    img: lojaCarros,
    link: "https://paulohgj.github.io/Loja-de-Carros/",
  },
  {
    id: 3,
    name: "Portfolio",
    img: portfolio1,
    link: "https://paulohgj.github.io/Portfolio/",
  },
  {
    id: 4,
    name: "Clock",
    img: clock,
    link: "https://paulohgj.github.io/RelogioJS/",
  },
];
