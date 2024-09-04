"use client";
import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";

type Props = {
  title: string;
  onTitleEdit: (title: string) => void;
};

const SongTitle = ({ title, onTitleEdit }: Props) => {
  const [editing, setEditing] = useState(false);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onTitleEdit(e.currentTarget.value);
      setEditing(false);
    }
  };

  return (
    <div className="my-2" onClick={() => setEditing(true)}>
      {!editing ? (
        <h1 className="text-3xl hover:cursor-pointer">{title}</h1>
      ) : (
        <Input type="text" defaultValue={title} onKeyDown={onKeyDown} />
      )}
    </div>
  );
};

export default SongTitle;
