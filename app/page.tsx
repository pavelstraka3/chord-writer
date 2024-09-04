import SongEditor from "@/app/components/SongEditor";
import GuitarChord, { ChordData } from "@/app/components/GuitarChord";

const CHORD_DATA: ChordData = {
  frets: [-1, 3, 2, 0, 1, 0],
  fingers: [0, 3, 2, 0, 1, 0],
  baseFret: 1,
};

export default function Home() {
  return (
    <div className="flex justify-center p-8">
      <SongEditor />
      <GuitarChord chordData={CHORD_DATA} />
    </div>
  );
}
