export class Word {
    text: string;
    chord?: string;  // Optional, since a word may not have an associated chord

    constructor(text: string, chord?: string) {
        this.text = text;
        this.chord = chord;
    }

    setChord(chord: string): void {
        this.chord = chord;
    }
}