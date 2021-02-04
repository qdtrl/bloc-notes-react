const NotePresentation = ({notes, setNotes, setNoteDisplay}) => {
  const handleNote = (id) => {
    console.log(notes.splice(notes.indexOf(id), 1));

    setNoteDisplay(id)
  }
  return (
    
    <ul>
      { notes && (
      
        notes.map((note, index) => (
          <li onClick={handleNote(index)}>
            <h1>{note.title}</h1>
            <p>
              {note.content}
            </p>
          </li>
        ))
      ) }
    </ul>
  )
};

export default NotePresentation;