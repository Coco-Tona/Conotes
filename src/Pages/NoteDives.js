// import React from "./NoteDives";
import { useNavigate } from "react-router-dom";
import Notepad from "../Component/Images/pngtree-yellow-notebook-cartoon-office-image_1232053-removebg-preview.png";
import React from "react";

export default function NoteDives({
  item,
  note,
  setNote,
  styleDarkandLightModetText,
}) {
  const navigate = useNavigate();

  const [dots, setDot] = React.useState(false);

  function handleMore() {
    // if (currentNote.id === noteid) {

    //   setDot((prevState) => !prevState);
    // } else return;
    // setCurrentNote();

    setDot((prevState) => !prevState);
  }
  function handleDelete() {
    setNote(note.filter((el) => el.id !== item.id));
  }

  function handleWriting(e) {
    navigate(`note/${item.id}`);
  }

  const styling = {
    display: dots ? "flex" : "none",
  };

  return (
    <div className="personal">
      <div className="title">
        <h1 style={styleDarkandLightModetText}>
          {item.title || "Add up your Title"}
        </h1>
      </div>

      <div className="write">
        <div className="essentials" style={styling}>
          <div className="add" onClick={handleWriting}>
            <ion-icon name="create-outline"></ion-icon>
          </div>
          <div className="delete" onClick={handleDelete}>
            <ion-icon name="trash"></ion-icon>
            {/* Del */}
          </div>
        </div>
        <div className="edit" onClick={handleMore}>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
    </div>
  );
}
