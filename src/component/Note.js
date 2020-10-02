import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p>{note.createdAt}</p>
      <p>
        {position.x},{position.y}
      </p>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_NOTES",
            createdAt: note.createdAt,
          })
        }
      >
        remove
      </button>
    </div>
  );
};

export default Note;
