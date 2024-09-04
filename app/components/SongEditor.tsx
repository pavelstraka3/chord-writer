"use client";
import React, { useEffect, useState } from "react";
import { Section } from "@/app/lib/classes/Section";
import { Line } from "@/app/lib/classes/Line";
import { Word } from "@/app/lib/classes/Word";
import { Song } from "@/app/lib/classes/Song";
import SectionComponent from "@/app/components/Section";
import { Button } from "@/app/components/ui/button";
import SongTitle from "@/app/components/SongTitle";
import EditableText from "@/app/components/EditableText";

const SongEditor = () => {
  const [song, setSong] = useState<Song>(new Song("Let It Be", "The Beatles"));

  const addSection = (sectionName: string) => {
    const newSection = new Section(sectionName);
    setSong(prevSong => {
      const updatedSong = new Song(prevSong.title, prevSong.artist);
      updatedSong.sections = [...prevSong.sections]; // Copy existing sections
      updatedSong.addSection(newSection); // Add the new section
      return updatedSong;
    });
  };

  const addLineToSection = (
    sectionIndex: number,
    wordsWithChords: { text: string; chord?: string }[],
  ) => {
    const newLine = new Line();
    wordsWithChords.forEach(({ text, chord }) => {
      newLine.addWord(new Word(text, chord));
    });

    setSong(prevSong => {
      const updatedSong = new Song(prevSong.title, prevSong.artist);
      updatedSong.sections = prevSong.sections.map((section, index) => {
        if (index === sectionIndex) {
          const updatedSection = new Section(section.sectionName);
          updatedSection.lines = [...section.lines, newLine]; // Add new line to the correct section
          return updatedSection;
        }
        return section;
      });
      return updatedSong;
    });
  };

  useEffect(() => {
    addSection("Verse 1");
    addLineToSection(0, [
      { text: "When", chord: "C" },
      { text: "I" },
      { text: "find", chord: "G" },
      { text: "myself", chord: "Am" },
    ]);

    addLineToSection(0, [
      { text: "in", chord: "F" },
      { text: "times", chord: "C" },
      { text: "of", chord: "G" },
      { text: "trouble", chord: "Am" },
    ]);

    addSection("Chorus");

    addLineToSection(1, [
      { text: "Let", chord: "F" },
      { text: "it", chord: "C" },
      { text: "be", chord: "G" },
      { text: "let", chord: "Am" },
      { text: "it", chord: "F" },
      { text: "be", chord: "C" },
    ]);
  }, []);

  const handleTitleEdit = (newTitle: string) => {
    setSong(prevSong => {
      const updatedSong = new Song(newTitle, prevSong.artist);
      updatedSong.sections = prevSong.sections;
      return updatedSong;
    });
  };

  const handleTitleArtistEdit = (newText: string, isTitle: boolean) => {
    setSong(prevSong => {
      const updatedSong = new Song(isTitle ? newText : prevSong.title, isTitle ? prevSong.artist : newText);
      updatedSong.sections = prevSong.sections;
      return updatedSong;
    });
  };

  return (
    <div className="max-w-[1200px]">
      <div className="flex flex-row">
        <div>
          <EditableText text={song.title} onTextEdit={(newTitle) => handleTitleArtistEdit(newTitle, true)}/>
          <EditableText text={song.artist} onTextEdit={(newArtist) => handleTitleArtistEdit(newArtist, false)}/>
        </div>
        <div className="flex flex-row gap-2">
          <Button>Uložit</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
      {song.sections.map((section, sectionIndex) => (
        <SectionComponent section={section} key={sectionIndex} />
      ))}
      <div className="flex">
        <Button className="flex" onClick={() => addSection("Verse")}>
          Přidat sekci
        </Button>
      </div>
    </div>
  );
};

export default SongEditor;
