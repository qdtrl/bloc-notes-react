import React from 'react';
import NotePresentation from '../note_presentation';

const SideBar = ({notes, setNoteDisplay}) => {
  return (
    <section className="sideBar">
      <button>Ajouter une Note</button>
      <NotePresentation />
    </section>
  )
};

export default SideBar;