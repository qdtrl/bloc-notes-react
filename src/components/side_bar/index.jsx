import React from 'react';
import NotePresentation from '../note_presentation';

const SideBar = ({notes, saveNotes, setNoteDisplay}) => {
  const handleNewNote = (event) => {
    event.preventDefault();
    saveNotes([{title: "# Nouvelle Note", content: "Contenue de ma nouvelle note"}, ...notes]);
    setNoteDisplay(0);
  };

  return (
    <section className="sideBar">
      <button onClick={handleNewNote}>Ajouter une Note</button>
      <ul>
        {
          notes.map((note, index) => (
            <NotePresentation
              note={note}
              setNoteDisplay={setNoteDisplay}
              index={index}
              key={index}
            />
          ))
        }
      </ul>
    </section>
  )
};

export default SideBar;