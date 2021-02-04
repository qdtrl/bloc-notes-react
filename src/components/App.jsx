import React from 'react';
import SideBar from './side_bar';
import Note from './note';

const App = () => {
  const loadNotes = () => {
    const loadData = JSON.parse(localStorage.getItem('bloc-noteData'));
    return loadData ? loadData : [{title: "# New note", content: "Empty"}] ;
  };
  const [notes, setNotes] = React.useState(loadNotes());
  const [noteDisplay, setNoteDisplay] = React.useState(null);

  
  const saveNotes = () => {
    const toSave = JSON.stringify(notes)
    localStorage.setItem('bloc-noteData', toSave);
  };

  React.useEffect(() => {
    saveNotes()
  }, [notes])

  return (
    <>
      {
        notes &&
        <SideBar
          notes={notes}
          setNoteDisplay={setNoteDisplay}
        />  
      }  
      { 
        noteDisplay &&
        <Note
          id={noteDisplay}
          notes={notes}
          setNotes={setNotes}
        /> 
      }
    </>
  )
};

export default App;