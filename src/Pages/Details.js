import React from "react";
import notes from "../Component/Images/19468018-removebg-preview.png";
import Header from "../Component/Header";
import Bottom from "../Component/Bottom";
import Save from "../Component/Save";
import Edit from "../Component/Edit";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Details({ note, updateNote, lightandDark }) {
  const Navigate = useNavigate();

  const params = useParams();

  const currentNote = note.find((el) => el.id === params.noteid);
  console.log(currentNote);

  const styleDarkandLightMode = {
    transition: "1s ease-out",
    backgroundColor: !lightandDark ? "black" : "white",
  };
  const styleDarkandLightModetText = {
    transition: "1s ease-out",
    color: !lightandDark ? "white" : "black",
  };

  const [title, setTitle] = React.useState(currentNote?.title || "");
  const [writing, setWriting] = React.useState(currentNote?.writing);

  function handleUpdateNote(e) {
    e.preventDefault();
    updateNote({ title, writing, id: params.noteid });
    Navigate(-1);
  }
  function handleBackButton() {
    console.log("Go back Home");
    Navigate(-1);
  }

  return (
    <>
      {/* <Header /> */}
      <section className="secTwo" style={styleDarkandLightMode}>
        <div className="type-area">
          <form>
            <div className="firstLine">
              <div
                className="back"
                onClick={handleBackButton}
                style={styleDarkandLightModetText}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </div>
              <Save
                handleUpdateNote={handleUpdateNote}
                styling={styleDarkandLightModetText}
              />
            </div>
            <div className="container">
              <input
                style={styleDarkandLightModetText}
                value={title}
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <textarea
              // placeholder={storetitle}
              style={styleDarkandLightModetText}
              value={writing}
              onChange={(e) => setWriting(e.target.value)}
              placeholder="Type Something..."
              name="writing"

              // textArea={textArea}
            ></textarea>
          </form>

          <div className="insider"></div>
        </div>
      </section>
    </>
  );
}
