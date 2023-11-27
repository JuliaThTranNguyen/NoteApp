import "./App.scss";
import { Header } from "./components/Header";
import { CreateNote } from "./components/CreateNote";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";
import { NoteObject } from "./models/note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);
  useEffect(() => {
    if (sessionStorage.getItem('notes')) {
      setNotes(JSON.parse(sessionStorage.getItem('notes') as string));
    }
  }, [])
  
  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes); 
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  const addNote = (note: NoteObject) => {
    setNotes([ note, ...notes ]);
    console.log(sessionStorage);
    sessionStorage.setItem('notes', JSON.stringify([ note, ...notes ]));
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <CreateNote addNote={addNote}/>
        <Notes notes={notes} deleteNote={deleteNote}/>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
