import { Box, InputBase, Button, Typography, styled } from "@mui/material";
import { useState } from "react";
import { NoteObject } from "../models/note";
import { v4 as uuid } from 'uuid';
import { TITLE_LIMIT, TEXT_LIMIT } from "../constants/constants";

const defaultObject = {
id: 0,
title: "",
details:"",
color:"",
date: (new Date().toLocaleString()).toString(),
}

const Error = styled(Typography)`
    background: red;
    color: #fff;
    padding: 10px;
    width: 50%;
`

interface ICreateNoteProps {
    addNote: (note: NoteObject) => void
}

export const CreateNote: React.FC<ICreateNoteProps> = ({ addNote }) => {
    const [note, setNote] = useState(defaultObject);
    const [error, setError] = useState<string>('');

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if(error) 
            setError('');
    setNote({...note, [e.target.name]: e.target.value})
  };

  const onCreateNote = () => {
    if (!note.title && !note.details) {
        setError('All fields are mandatory');
        return;
    }

    addNote({ ...note, id: uuid() });
    setNote(defaultObject);
}


  return (
    <Box className="box">
       <InputBase 
                name="title" 
                value={note.title} 
                onChange={(e) => onValueChange(e)} 
                placeholder="Title" 
                inputProps={{
                    maxLength: TITLE_LIMIT
                }}
            />
            <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
            <InputBase 
                name="details" 
                value={note.details} 
                onChange={(e) => onValueChange(e)} 
                placeholder="Details"
                inputProps={{
                    maxLength: TEXT_LIMIT
                }}
            />
            <Box component="span">{note.details.length}/{TEXT_LIMIT}</Box>
            <InputBase 
                type="color"
                name="color"
                defaultValue={'#F5F5F5'}
                onChange={(e) => onValueChange(e)} 
                placeholder="Choose color" 
            />
            <Button 
                variant="outlined"
                onClick={() => onCreateNote()}>
                    Create
            </Button>
       { error && <Error>{error}</Error> }
    </Box>
  );
};
