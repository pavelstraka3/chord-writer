'use client'

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Home, Music, Plus, User } from "lucide-react"

export function SongList() {
  const songs = [
    { id: 1, title: "Wonderwall", artist: "Oasis", image: "/placeholder.svg?height=40&width=40" },
    { id: 2, title: "Stairway to Heaven", artist: "Led Zeppelin", image: "/placeholder.svg?height=40&width=40" },
    { id: 3, title: "Hotel California", artist: "Eagles", image: "/placeholder.svg?height=40&width=40" },
    { id: 4, title: "Smells Like Teen Spirit", artist: "Nirvana", image: "/placeholder.svg?height=40&width=40" },
    { id: 5, title: "Sweet Home Alabama", artist: "Lynyrd Skynyrd", image: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-1 flex items-center space-x-4 md:space-x-6">
          <Link className="flex items-center space-x-2 font-semibold" href="#">
            <Music className="h-6 w-6" />
            <span className="sr-only">LyricsApp</span>
          </Link>
          <Link className="font-medium" href="#">
            Songs
          </Link>
          <Link className="font-medium" href="#">
            New Song
          </Link>
          <Link className="font-medium" href="#">
            Profile
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="hidden md:block">
            <Input className="w-[200px] md:w-[300px]" placeholder="Search songs..." type="search" />
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <User className="h-4 w-4" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Songs</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Song
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song) => (
            <Card key={song.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage alt={`${song.artist} avatar`} src={song.image} />
                  <AvatarFallback>{song.artist[0]}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <CardTitle>{song.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{song.artist}</div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  View Lyrics & Chords
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}