import React from 'react';
import Showdown from 'showdown';

const Note = ({id, notes, setNotes}) => {
  const [noteHtml, setNoteHtml] = React.useState(null);
  
  const handleNoteHtml = () => {
    const converter = new Showdown.Converter();
    const fullText = notes[0].title + "\n" + notes[0].content;
    setNoteHtml(converter.makeHtml(fullText));
    console.log(typeof(noteHtml));
  };

  const displayNoteHtml = () => {
    return {__html: noteHtml};
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {title: `# ${event.target[0].value}`, content: event.target[1].value};
    setNotes([...notes, note]);
  }

  return (
    <section className="note">
      <div dangerouslySetInnerHTML={displayNoteHtml()} className="noteHtml"></div>
      <form onChange={handleNoteHtml} onSubmit={handleSubmit}>
        <input className="title" type="text"/>
        <textarea className="content" type="text"/>
        <button type="submit">Sauvegarder</button>
      </form>
    </section>
  )
};

export default Note;