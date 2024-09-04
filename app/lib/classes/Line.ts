import {Word} from "@/app/lib/classes/Word";

export class Line {
    words: Word[];

    constructor() {
        this.words = [];
    }

    addWord(word: Word): void {
        this.words.push(word);
    }
}