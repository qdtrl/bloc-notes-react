const Note = ({id, notes, setNotes}) => {
  const handleSubmit = (event) => {
    const note = {title: "test", content: "ceci est la note du test"};
    setNotes([...notes, note]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="title" type="text"/>
      <input className="content" type="text"/>
      <button type="submit">Sauvegarder</button>
    </form>
  )
};

export default Note;