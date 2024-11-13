import React from "react";
import SongEditor from "@/app/components/SongEditor";

async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const response = await fetch(
      `${process.env.SERVER_URL}/songs/` + params.id,
    );
    const data = await response.json();

    return <SongEditor songData={data} />;
  } catch (e) {
    return <div>Something happened.</div>;
  }
}

export default Page;
