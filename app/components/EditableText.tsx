"use client";
import React, { useState } from "react";
import { Input } from "@/app/components/ui/input";

type Props = {
    text: string;
    onTextEdit: (text: string) => void;
};

const EditableText = ({ text, onTextEdit }: Props) => {
    const [editing, setEditing] = useState(false);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onTextEdit(e.currentTarget.value);
            setEditing(false);
        }
    };

    return (
        <div className="my-2" onClick={() => setEditing(true)}>
            {!editing ? (
                <h1 className="hover:cursor-pointer">{text}</h1>
            ) : (
                <Input type="text" defaultValue={text} onKeyDown={onKeyDown} />
            )}
        </div>
    );
};

export default EditableText;
