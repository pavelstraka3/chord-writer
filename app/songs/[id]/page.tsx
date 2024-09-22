import React from "react";
import SongEditor from "@/app/components/SongEditor";

async function Page({ params }: { params: { id: string } }) {
  try {
    const response = await fetch("http://localhost:3000/songs/" + params.id);
    const data = await response.json();

    return <SongEditor songData={data} />;
  } catch (e) {
    return <div>Something happened.</div>;
  }
}

export default Page;
