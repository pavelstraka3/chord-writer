import React from "react";
import { Song } from "@/app/lib/classes/Song";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import Link from "next/link";

type Props = {
  songs: Song[];
};

function SongList({ songs }: Props) {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Songs</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Song
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {songs.map((song: Song) => (
          <Card key={song.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage
                  alt={`${song.artist} avatar`}
                  src="https://static.posters.cz/image/1300/art-photo/the-beatles-1969-i198951.jpg"
                />
                <AvatarFallback>{song.artist[0]}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>{song.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {song.artist}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Link href={`/songs/${song.id}`} className="w-full">
                <Button variant="outline">View Lyrics & Chords</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default SongList;
