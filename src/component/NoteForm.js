import React, { useState, useContext } from "react";
import moment from "moment";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createdAt, setCreatedAt] = useState(moment().valueOf());
  const position = useMousePosition();

  const addNote = (e) => {
    e.preventDefault();
    setCreatedAt(moment().valueOf());
    dispatch({
      type: "ADD_NOTES",
      title,
      body,
      createdAt,
    });
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>
        {position.x}-{position.y}
      </p>
      <form onSubmit={addNote}>
        <span aria-label="a rocket blasting off" role="img">
          {"\u1000"}
        </span>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
