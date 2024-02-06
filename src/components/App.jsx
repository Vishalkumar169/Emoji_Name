import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createCard(vishal) {
  return (
    <Entry
      key={vishal.key}
      emoji={vishal.emoji}
      name={vishal.name}
      meaning={vishal.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
