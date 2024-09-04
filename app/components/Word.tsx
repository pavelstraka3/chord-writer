import React from "react";
import { Word } from "@/app/lib/classes/Word";

type Props = {
  word: Word;
};

const WordComponent = ({ word }: Props) => {
  return (
    <div className="grid grid-rows-2 mx-1">
      <div className="flex justify-center">
        {word.chord && (
          <span style={{ color: "blue", marginRight: "5px" }}>
            {word.chord}
          </span>
        )}
      </div>
      <div>{word.text}</div>
    </div>
  );
};

export default WordComponent;
