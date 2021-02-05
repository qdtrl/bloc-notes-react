import React from 'react';
import Showdown from 'showdown';

const Note = ({id, notes, saveNotes}) => {
  console.log(`On note : ${id} via Note`);
  const [noteHtml, setNoteHtml] = React.useState();
  const [title, setTitle] = React.useState(notes[id].title.slice(2, notes[id].title.length));
  const [content, setContent] = React.useState(notes[id].content);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  }

  const displayNoteHtml = () => {
    return {__html: noteHtml};
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    notes.splice(id, 1);
    notes.unshift({title: `# ${title}`, content: content});
    saveNotes(notes);
  }

  React.useEffect(() => {
    const converter = new Showdown.Converter();
    const fullText = "# " + title + "\n" + content;
    setNoteHtml(converter.makeHtml(fullText));
  }, [title, content])

  React.useEffect(() => {
    setTitle(notes[id].title.slice(2, notes[id].title.length))
    setContent(notes[id].content)
  }, [id])

  return (
    <section className="note">
      <div dangerouslySetInnerHTML={displayNoteHtml()} className="noteHtml"></div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeTitle} className="title" value={title} type="text"/>
        <textarea  onChange={handleChangeContent} className="content" value={content} type="text"/>
        <button type="submit">Sauvegarder</button>
      </form>
    </section>
  )
};

export default Note;