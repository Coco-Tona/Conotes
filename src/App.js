import "./App.css";
import "./Component/style.css";
import React from "react";
import FirstPage from "./Pages/FirstPage";
import Details from "./Pages/Details";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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

  React.useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
    localStorage.setItem("darkandLight", JSON.stringify(lightandDark));
  });

  return (
    <>
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
    </>
  );
}

export default App;

// "predeploy": "npm run deploy",

// "deploy": "gh-pages -d deploy"

// "homepage": "http://Coco-Tona.github.io/Notepad",
