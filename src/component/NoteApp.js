import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducer/Note";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import NoteContext from "../context/notes-context";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteList />
      <p>Add Notes</p>
      <NoteForm />
    </NoteContext.Provider>
  );
};

export default NoteApp;
