const fs = require('fs');

let fetchNotes = ()=>{
    let notes=[];
    try{
        let notesString = fs.readFileSync('notes-data.json',{encoding : 'utf-8'});
        notes = JSON.parse(notesString);
    }catch(e){
        console.log('Errors occured during read', e.message);
    }
    return notes;
};

let saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

let addNote = (title, body)=>{
    let note = {
        title,
        body
    };
    let notes =fetchNotes();
    let duplicateNotes = notes.filter((note)=>note.title===title);
    notes.push(note);
    if(duplicateNotes.length === 0){
        saveNotes(notes);
        return note;
    }
};

let removeByTitle = (title)=>{
    debugger;
    let notes = fetchNotes();
    let lengthBefore = notes.length;
    notes = notes.filter((note)=>note.title !=title);
    saveNotes(notes);
    return lengthBefore!=notes.length;
};

let getAll = () => {
    return fetchNotes();
};

let getByTitle = (title)=>{
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note)=>note.title===title);
    return filteredNotes[0];
};

let logNote = (note)=>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports={
    addNote,
    getAll,
    getByTitle,
    removeByTitle,
    logNote
};
