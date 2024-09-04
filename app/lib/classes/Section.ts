import {Line} from "@/app/lib/classes/Line";

export class Section {
    sectionName: string;
    lines: Line[];

    constructor(sectionName: string) {
        this.sectionName = sectionName;
        this.lines = [];
    }

    addLine(line: Line): void {
        this.lines.push(line);
    }
}