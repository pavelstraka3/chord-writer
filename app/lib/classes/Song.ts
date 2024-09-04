import {Section} from "@/app/lib/classes/Section";

export class Song {
    title: string;
    artist: string;
    sections: Section[];

    constructor(title: string, artist: string) {
        this.title = title;
        this.artist = artist;
        this.sections = [];
    }

    addSection(section: Section) {
        this.sections.push(section);
    }
}