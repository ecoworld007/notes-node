const fs = require("fs");
const notes = require('./notes')
const _ = require('lodash');
const yargs = require('yargs');
const commandArgs = {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }
};
let argv = yargs.command('add','Add new note',{
    ...commandArgs
})
.command('list','Show all the notes',)
.command('read','Show note with title given',{
    title: commandArgs.title
})
.command('remove','Remove note with title given',{
    title: commandArgs.title
})
.help()
.argv;

let command = argv._[0];

if(command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} Notes...`)
    allNotes.forEach(note => {
        notes.logNote(note);
    });
}else if(command === 'add'){    
    let note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note is created');
        notes.logNote(note);
    }else{
        console.log(`Note title taken`);
    }
    
}else if(command === 'remove'){
    let isRemoved = notes.removeByTitle(argv.title);
    let message = isRemoved?'Note Removed':'Note not removed';
    console.log(message);
}else if(command === 'read'){
    console.log('reading the notes')
    let note =notes.getByTitle(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found')
    }
}else{
    console.log('command not recognized')
}