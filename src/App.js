import "./App.css";
import "./Component/style.css";
import React from "react";
import Header from "./Component/Header";
import Bottom from "./Component/Bottom";
import FirstPage from "./Pages/FirstPage";
import Details from "./Pages/Details";
// import folder from "./Component/Images/new-folder-dynamic-premium.png";
import Writing from "./Pages/Writing";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const [note, setNote] = React.useState(
    // []
    JSON.parse(localStorage.getItem("note")) || []
  );

  const [lightandDark, setLightandDark] = React.useState(
    JSON.parse(localStorage.getItem("darkandLight"))
  );

  function togglingDarkandLightMode() {
    setLightandDark((prevState) => !prevState);
    console.log(lightandDark);
  }

  const navigate = useNavigate();

  const storingObject = () => {
    return {
      title: "",
      id: uuid(),
      content: "",
    };
  };

  function createNote(e) {
    // e.preventDefault();

    const objectStorage = storingObject();

    setNote((prevState) => [...prevState, objectStorage]);

    navigate(`note/${objectStorage.id}`);
  }
  function updateNote(updatednote) {
    const updatedArray = note.map((el) => {
      if (el.id === updatednote.id) {
        return updatednote;
      }
      return el;
    });
    setNote(updatedArray);
  }

  // function findCurrentNote() {
  //   return (
  //     note.find((not) => {
  //       return note.id === currentNote.id;
  //     }) || note[0]
  //   );
  // }

  React.useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
    localStorage.setItem("darkandLight", JSON.stringify(lightandDark));
  });

  return (
    <div className="araes">
      <Routes>
        <Route
          index
          element={
            <FirstPage
              lightandDark={lightandDark}
              setLightandDark={setLightandDark}
              togglingDarkandLightMode={togglingDarkandLightMode}
              note={note}
              setNote={setNote}
              // title={title}
              // setTitle={setTitle}
              createNote={createNote}
            />
          }
        />
        <Route
          path="note/:noteid"
          element={
            <Details
              note={note}
              updateNote={updateNote}
              togglingDarkandLightMode={togglingDarkandLightMode}
              lightandDark={lightandDark}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
