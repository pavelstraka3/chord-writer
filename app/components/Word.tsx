import React, { useState } from "react";
import { Word } from "@/app/lib/classes/Word";
import { Input } from "@/app/components/ui/input";

type Props = {
  word: Word;
};

const WordComponent = ({ word }: Props) => {
  const [editing, setEditing] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // onTextEdit(e.currentTarget.value);
      setEditing(false);
    }
  };

  return (
    <div className="grid grid-rows-2 mx-1" onClick={() => setEditing(true)}>
      <div className="flex justify-center">
        {word.chord && (
          <span style={{ color: "blue", marginRight: "5px" }}>
            {word.chord}
          </span>
        )}
      </div>
      {!editing ? (
        <div>{word.text}</div>
      ) : (
        <Input type="text" defaultValue={word.text} onKeyDown={onKeyDown} />
      )}
    </div>
  );
};

export default WordComponent;
