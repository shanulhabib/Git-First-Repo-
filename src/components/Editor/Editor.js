import React, { useState } from "react";
import "./Editor.css";
import { Button, Card } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Editor = () => {
  const [text, setText] = useState("");
  const [copy, setCopy] = useState(false);
  const [story, setStory] = useState([]);

  const upperCaseHandler = () => {
    const upper = text.toUpperCase();
    setText(upper);
  };

  const lowerCaseHandler = () => {
    const lower = text.toLowerCase();
    setText(lower);
  };

  let stories = story.map((s, i) => (
    <Card key={i}>
      <Card.Header>Story</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{s}</p>
        </blockquote>
      </Card.Body>
    </Card>
  ));

  return (
    <div className="editor-container">
      <label>Tell us your story:</label>
      <textarea
        id="story"
        name="story"
        rows="5"
        cols="60"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <Button onClick={upperCaseHandler}>UpperCase</Button>
      <Button onClick={lowerCaseHandler}>LowerCase</Button>
      <Button onClick={() => setText("")}>Clear</Button>
      <Button onClick={() => setStory([...story, text])}>Add Story</Button>

      <CopyToClipboard text={copy} onCopy={() => setCopy(true)}>
        <Button>Copy</Button>
      </CopyToClipboard>

      <p>Character Count {text.length}</p>
      <p>Word Count {text.split(" ").length}</p>

      {stories}
    </div>
  );
};

export default Editor;
