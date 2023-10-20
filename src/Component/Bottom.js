import React from "react";
// import { ACTIONS } from "../App";
import { useNavigate } from "react-router-dom";
import FirstPage from "../Pages/FirstPage";
import noteSvg from "./Images/note-add.svg";
import { motion } from "framer-motion";

const svgVariant = {
  hidden: { rotate: -0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { repeat: Infinity, duration: 5 },
  },
};

export default function Buttom({ setOptions, createNote }) {
  return (
    <footer className="adding">
      <div className="container">
        <div className="add" onClick={createNote}>
          {/* <ion-icon name="add-outline"></ion-icon> */}
          <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="visible"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={pathVariant}
              d="M16 2V4M11 2V4M6 2V4"
              stroke="##FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              variants={pathVariant}
              d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              variants={pathVariant}
              d="M17.5 14L17.5 22M21.5 18L13.5 18"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <motion.path
              variants={pathVariant}
              d="M7 15H11M7 10H15"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </motion.svg>
        </div>
      </div>
    </footer>
  );
}
