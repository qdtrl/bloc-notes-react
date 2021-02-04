import React from 'react';
import ReactLoading from 'react-loading';
import SideBar from './side_bar';
import Note from './note';

const App = () => {
  const [notes, setNotes] = React.useState(loadNotes());
  const [noteDisplay, setNoteDisplay] = React.useState(null);

  const loadNotes = () => {
    console.log("load datas");
    return [{title: "first", content: "la premiere valeur du tableau"}];
  };
  const saveNotes = () => {
    console.log("saved datas");
  };

  React.useEffect(() => {
    saveNotes()
  }, [notes])

  return (
    <>
      { 
        <SideBar
          notes={notes}
          setNoteDisplay={setNoteDisplay}
        /> &&
        <Note
          id={noteDisplay}
          notes={notes}
          setNotes={setNotes}
        /> ||
        <div className="load">
          <ReactLoading type={'spokes'} color={'orange'} height={'60px'} width={'60px'} />
          <p>Chargement...</p>
        </div> 
      }
    </>
  )
};

export default App;