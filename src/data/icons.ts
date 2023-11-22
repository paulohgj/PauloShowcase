import { Icon } from "../types/Icon";

import linkedinIcon from "../img/icons/icon-linkedin.svg";
import githubIcon from "../img/icons/icon-github.svg";
import mailIcon from "../img/icons/icon-gmail.svg";
import whatsappIcon from "../img/icons/icon-whatsapp.svg";

export const icons: Icon[] = [
  {
    id: 1,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/paulohgj/",
    img: linkedinIcon,
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://github.com/paulohgj",
    img: githubIcon,
  },
  {
    id: 3,
    name: "Mail",
    link: "mailto:contato.paulohgjunior@gmail.com",
    img: mailIcon,
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/5537996636917",
    img: whatsappIcon,
  },
];
