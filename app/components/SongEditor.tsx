"use client";
import React, { useEffect, useState } from "react";
import { Section } from "@/app/lib/classes/Section";
import { Line } from "@/app/lib/classes/Line";
import { Word } from "@/app/lib/classes/Word";
import { Song } from "@/app/lib/classes/Song";
import SectionComponent from "@/app/components/Section";
import { Button } from "@/app/components/ui/button";
import EditableText from "@/app/components/EditableText";
import { createSong, updateSong } from "@/app/lib/serverActions";

type Props = {
  songData: Song;
};

const createSongFromData = (songData: Song): Song => {
  const song = new Song(songData.title, songData.artist);
  songData.sections.forEach(section => {
    const newSection = new Section(section.sectionName);
    section.lines.forEach(line => {
      const newLine = new Line();
      line.words.forEach(word => {
        newLine.addWord(new Word(word.text, word.chord));
      });
      newSection.addLine(newLine);
    });
    song.addSection(newSection);
  });
  return song;
};

const SongEditor = ({ songData }: Props) => {
  const [song, setSong] = useState<Song>(() => createSongFromData(songData));

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
    setSong(createSongFromData(songData));
  }, [songData]);

  const handleTitleArtistEdit = (newText: string, isTitle: boolean) => {
    setSong(prevSong => {
      const updatedSong = new Song(
        isTitle ? newText : prevSong.title,
        isTitle ? prevSong.artist : newText,
      );
      updatedSong.sections = prevSong.sections;
      return updatedSong;
    });
  };

  const handleSave = () => {
    if (songData?.id) {
      updateSong(songData.id, song);
    } else {
      createSong(song);
    }
  };

  return (
    <div className="max-w-[1200px]">
      <div className="flex flex-row">
        <div>
          <EditableText
            text={song.title}
            onTextEdit={newTitle => handleTitleArtistEdit(newTitle, true)}
          />
          <EditableText
            text={song.artist}
            onTextEdit={newArtist => handleTitleArtistEdit(newArtist, false)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <Button type="button" onClick={handleSave}>
            Uložit
          </Button>
          <Button type="button" variant="outline">
            Export
          </Button>
        </div>
      </div>
      {song.sections.map((section, sectionIndex) => (
        <SectionComponent section={section} key={sectionIndex} />
      ))}
      <div className="flex">
        <Button
          type="button"
          className="flex"
          onClick={() => addSection("Verse")}
        >
          Přidat sekci
        </Button>
      </div>
    </div>
  );
};

export default SongEditor;
