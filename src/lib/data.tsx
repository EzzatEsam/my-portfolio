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
import { TbBrandCpp } from "react-icons/tb";

export const myName = "Ezzat Esam Elsayed";
export const myTitle = "Communication and Information Engineer";
export const myEmail = "ezzatesam1214@gmail.com";
export const myLinkedin = "https://www.linkedin.com/in/ezzatesam/";
export const myGithub = "https://github.com/EzzatEsam";
export const MyItchIo = "https://ezzatesam.itch.io/";

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
        name: "C++",
        logo: <TbBrandCpp size={25} color="#6295CB" />,
      },
      {
        name: "Typescript",
        logo: <SiTypescript size={25} color="#2F74C0" />,
      },
      {
        name: "Go",
        logo: <FaGolang size={25} color="#00A7D0" />,
      },
    ],
  },
  {
    name: "AI & Datascience",
    innerSKills: [
      {
        name: "Pytorch",
        logo: <SiPytorch size={25} color="#ED3C0E" />,
      },
      {
        name: "Tensorflow",
        logo: <SiTensorflow size={25} color="#ED8E24" />,
      },
      {
        name: "Numpy",
        logo: <SiNumpy size={25} color="#4BA6C9" />,
      },
      {
        name: "Pandas",
        logo: <SiPandas size={25} color="#120751" />,
      },
      {
        name: "Scikit-learn",
        logo: <SiScikitlearn size={25} color="#F09437" />,
      },
      // {
      //   name: "OpenCV",
      //   logo: <IconsSi.SiOpencv size={25} color="red" />,
      // },
    ],
  },
  {
    name: "Frontend",
    innerSKills: [
      {
        name: "React",
        logo: <FaReact size={25} color="#5DD3F3" />,
      },
      {
        name: "FLutter",
        logo: <IconsSi.SiFlutter size={25} color="#5AC2F0" />,
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
        logo: <IconsSi.SiDjango size={25} color="#2AA473" />,
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
