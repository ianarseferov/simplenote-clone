import pinIcon from "../images/pin-icon.svg";

function DisplayAllNotes({ noteList, getCurrentNote, currentNote }) {
  const displayNoteElements = (
    <div className="note-list">
      {noteList.map((note) => {
        return (
          <div
            className={
              currentNote.id === note.id
                ? "note-element active-note"
                : "note-element"
            }
            key={note.id}
            onClick={() => getCurrentNote(note.id)}
          >
            <div className="note-data">
              <p className="note-title">{note.title}</p>
              <p className="note-subtitle">{note.subtitle}</p>
            </div>
            <img src={pinIcon} alt="Pin" className="pin" />
          </div>
        );
      })}
    </div>
  );
  return displayNoteElements;
}

export default DisplayAllNotes;