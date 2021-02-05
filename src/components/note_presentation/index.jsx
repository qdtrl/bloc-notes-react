import Showdown from 'showdown';

const NotePresentation = ({note, setNoteDisplay, index}) => {
  const convertText = () => {
    const converter = new Showdown.Converter();
    let content = note.content ? note.content : "No Content";
    content = content.split("\n");
    const first = content[0] + "\n";
    const second = content[1] ? content[1] : "";
    return {__html: converter.makeHtml(`${note.title ? note.title : "# No Title"}\n${first + second}`)};
  }

  return (
          <li onClick={() => {setNoteDisplay(index);}}>
            <div dangerouslySetInnerHTML={convertText()} className="contentHtml"></div>
          </li>
  )
};

export default NotePresentation;