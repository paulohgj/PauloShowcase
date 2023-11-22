import { Skills } from "../types/Skills";

// Habilidades
import htmlIcon from "../img/skills/icon-html.svg";
import cssIcon from "../img/skills/icon-css.svg";
import jsIcon from "../img/skills/icon-javascript.svg";
import sassIcon from "../img/skills/icon-sass.svg";
import gitIcon from "../img/skills/icon-git.svg";
import viteIcon from "../img/skills/icon-vite.svg";

// Em desenvolvimento
import tsIcon from "../img/development/icon-typescript.svg";
import reactIcon from "../img/development/icon-react.svg";
import nextIcon from "../img/development/icon-nextjs.svg";

export const skills: Skills[] = [
  { id: 1, name: "HTML5", img: htmlIcon },
  { id: 2, name: "CSS3", img: cssIcon },
  { id: 3, name: "Javascript", img: jsIcon },
  { id: 4, name: "Sass", img: sassIcon },
  { id: 5, name: "Git", img: gitIcon },
  { id: 6, name: "Vite", img: viteIcon },
];

export const dev: Skills[] = [
  { id: 1, name: "Typescript", img: tsIcon },
  { id: 2, name: "ReactJs", img: reactIcon },
  { id: 3, name: "NextJs", img: nextIcon },
];
