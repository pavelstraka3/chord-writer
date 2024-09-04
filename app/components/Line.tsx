import React from "react";
import { Line } from "@/app/lib/classes/Line";
import WordComponent from "@/app/components/Word";

type Props = {
  line: Line;
};

const LineComponent = ({ line }: Props) => {
  return (
    <div className="flex flex-row my-1">
      {line.words.map((word, wordIndex) => (
        <WordComponent word={word} key={wordIndex} />
      ))}
    </div>
  );
};

export default LineComponent;
