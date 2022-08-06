const util = require('utils');
const fs = require('fs');


const { notStrictEqual } = require('assert');
const { title } = require('process');
const { text } = require('body-parser');

const writeNote = util.promisify(fs.readFile);
const readNote = util.promisify(fs.writeFile);























addNote(note) 
const{  title, text
} =note;
if (!title || !text){
    throw new Error('Please do not leave blank');
}

const newNote = {title, text, id};

return this.retrieveNotes()
.then(updatedNotes => this.write(updatedNotes))
.then(notes =>[...notes,newNote])
.then(() => newNote);



//Delete Note
deleteNote(id) 
{
    return this.retrieveNotes()
    .then(note => notes.filter(note => note.id !== parseInt(id)))
    .then(filteredNotes => this.write(filteredNotes));
}

module.exports = new Save();