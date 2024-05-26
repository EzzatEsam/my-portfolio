import { SkillSet } from "./SkillSet";
import {
  SiPytorch,
  SiNumpy,
  SiCsharp,
  SiTypescript,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

import * as IconsFa from "react-icons/fa";
import * as IconsSi from "react-icons/si";

export const myName = "Ezzat Esam Elsayed";
export const myTitle = "Communication and Information Engineer";
export const myEmail = "ezzatesam1214@gmail.com";
export const myLinkedin = "https://www.linkedin.com/in/ezzatesam/";
export const myGithub = "https://github.com/EzzatEsam";

export const mySkills: SkillSet[] = [
  {
    name: "Programming Languages",
    innerSKills: [
      {
        name: "Python",
        logo: <FaPython size={25} color="#326B9B" />,
      },
      {
        name: "C#",
        logo: <SiCsharp size={25} color="#6D4ED4" />,
      },
      {
        name: "Typescript",
        logo: <SiTypescript size={25} color="#2F74C0" />,
      },
      {
        name: "Go",
        logo: <FaGolang size={25} />,
      },
    ],
  },
  {
    name: "Ai & Datascience",
    innerSKills: [
      {
        name: "Pytorch",
        logo: <SiPytorch size={25} color="orange" />,
      },
      {
        name: "Tensorflow",
        logo: <SiTensorflow size={25} color="orange" />,
      },
      {
        name: "Numpy",
        logo: <SiNumpy size={25} color="blue" />,
      },
      {
        name: "Pandas",
        logo: <SiPandas size={25} color="blue" />,
      },
      {
        name: "Scikit-learn",
        logo: <SiScikitlearn size={25} color="blue" />,
      },
    ],
  },
  {
    name: "Front End",
    innerSKills: [
      {
        name: "React",
        logo: <FaReact size={25} color="cyan" />,
      },
    ],
  },
  {
    name: "Backend",
    innerSKills: [
      {
        name: "FastAPI",
        logo: <IconsSi.SiFastapi size={25} />,
      },
      {
        name: "Flask",
        logo: <IconsSi.SiFlask size={25} />,
      },
      {
        name: "Django",
        logo: <IconsSi.SiDjango size={25} />,
      },
      {
        name: "NextJS",
        logo: <IconsSi.SiNextdotjs size={25} />,
      },
    ],
  },
  {
    name: "Database",
    innerSKills: [
      {
        name: "MongoDB",
        logo: <IconsSi.SiMongodb size={25} color="green" />,
      },
      {
        name: "MySql",
        logo: <IconsSi.SiMysql size={25} />,
      },
      {
        name: "Firebase",
        logo: <IconsSi.SiFirebase size={25} color="#FFC400" />,
      },
    ],
  },
  {
    name: "Game Dev",
    innerSKills: [
      {
        name: "Unity",
        logo: <IconsSi.SiUnity size={25} />,
      },
      {
        name: "Godot",
        logo: <IconsSi.SiGodotengine size={25} color="#53A4E0" />,
      },
    ],
  },
];
