import React from 'react';
import SideBar from './side_bar';
import Note from './note';

const App = () => {
  const getNotes = () => {
    const loadData = JSON.parse(localStorage.getItem('bloc-noteData'));
    return loadData ? loadData : [{title: "# New note", content: "Empty content"}] ;
  };

  const [notes, setNotes] = React.useState(getNotes());
  const [noteDisplay, setNoteDisplay] = React.useState(false);
  
  const saveNotes = (addedNotes) => {
    const toSave = JSON.stringify(addedNotes)
    localStorage.setItem('bloc-noteData', toSave);
    setNotes(getNotes());
  };
  
  console.log(`On note : ${noteDisplay} via app`);

  return (
    <>
      {
        notes &&
        <SideBar
          notes={notes}
          setNotes={setNotes}
          saveNotes={saveNotes}
          setNoteDisplay={setNoteDisplay}
        />  
      }  
      { 
        (noteDisplay !== false) &&
        <Note
          id={noteDisplay}
          notes={notes}
          saveNotes={saveNotes}
        /> 
      }
    </>
  )
};

export default App;