import React from "react";

type Props = {
  chordData: ChordData;
};

export type ChordData = {
  frets: number[];
  fingers: number[];
  baseFret: number;
};

const GuitarChord = ({ chordData }: Props) => {
  const { frets, fingers, baseFret } = chordData;


  const numStrings = 6; // 6 strings on a guitar
  const numFrets = 4; // Displaying 4 frets

  return (
    <div className="p-4">
        <h1>C Major</h1>
      <div className="grid grid-cols-[30px_repeat(6,_40px)]">
        <div></div>
        {[...Array(numStrings)].map((_, i) => (
          <div key={`string-${i}`} className="text-center py-2">
            {6 - i}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[30px_repeat(6,_40px)]">
        {[...Array(numFrets)].map((_, fretIndex) => (
          <React.Fragment key={`fret-${fretIndex}`}>
            <div className="flex items-center justify-center h-10">
              {baseFret + fretIndex}
            </div>
            {[...Array(numStrings)].map((_, stringIndex) => {
              const isFingerPosition =
                frets[stringIndex] === baseFret + fretIndex;
              return (
                <div
                  key={`fret-${fretIndex}-string-${stringIndex}`}
                  className="relative border-r border-b border-black h-10 w-10 flex items-center justify-center"
                >
                  {isFingerPosition && fingers[stringIndex] !== 0 && (
                    <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {fingers[stringIndex]}
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  // return (
  //     <div className="inline-block p-4">
  //         {/* Render the fret numbers */}
  //         <div className="grid grid-cols-[30px_repeat(4,_40px)]">
  //             <div></div>
  //             {[...Array(numFrets)].map((_, i) => (
  //                 <div key={`fret-${i}`} className="text-center py-2">
  //                     {baseFret + i}
  //                 </div>
  //             ))}
  //         </div>
  //
  //         {/* Render the guitar fretboard */}
  //         <div className="grid grid-cols-[30px_repeat(4,_40px)]">
  //             {[...Array(numStrings)].map((_, stringIndex) => (
  //                 <React.Fragment key={`string-${stringIndex}`}>
  //                     {/* String label (optional) */}
  //                     <div className="flex items-center justify-center h-10">
  //                         {6 - stringIndex}
  //                     </div>
  //                     {/* Render frets for each string */}
  //                     {[...Array(numFrets)].map((_, fretIndex) => {
  //                         const isFingerPosition = frets[stringIndex] === baseFret + fretIndex;
  //                         return (
  //                             <div
  //                                 key={`string-${stringIndex}-fret-${fretIndex}`}
  //                                 className="relative border-r border-b border-black h-10 w-10 flex items-center justify-center"
  //                             >
  //                                 {isFingerPosition && fingers[stringIndex] !== 0 && (
  //                                     <div
  //                                         className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs"
  //                                     >
  //                                         {fingers[stringIndex]}
  //                                     </div>
  //                                 )}
  //                             </div>
  //                         );
  //                     })}
  //                 </React.Fragment>
  //             ))}
  //         </div>
  //     </div>
  // );
};

export default GuitarChord;
