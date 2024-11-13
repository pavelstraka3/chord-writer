import React from "react";
import SongList from "@/app/songs/components/SongList";

async function Page() {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/songs`);
    const data = await response.json();

    return <SongList songs={data} />;
  } catch (e) {
    return <div>Something happened.</div>;
  }
}

export default Page;
