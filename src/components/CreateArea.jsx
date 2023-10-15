import React, { useState } from "react";

function CreateArea(props) {
  //- Create a constant that keeps track of the title and content.
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });
  //- Pass the new note back to the App.
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(Note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={Note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={Note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
