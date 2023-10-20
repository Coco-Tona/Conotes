import React from "react";

export default function Save({
  handleUpdateNote,
  styling,

  //   handleNote,
}) {
  return (
    <>
      <button className="save" onClick={handleUpdateNote} style={styling}>
        <ion-icon name="save"></ion-icon>
      </button>
    </>
  );
}
