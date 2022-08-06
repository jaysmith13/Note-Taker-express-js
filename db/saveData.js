const util = require('utils');
const fs = require('fs');
const { notStrictEqual } = require('assert');
const { title } = require('process');
const { text } = require('body-parser');






















addNote(note) 
const{  title, text
} =note;
if (!title || !text){
    throw new Error('Please do not leave blank');
}





//Delete Note
deleteNote(id) 
{
    return this.retrieveNotes()
    .then(note => notes.filter(note => note.id !== parseInt(id)))
    .then(filteredNotes => this.write(filteredNotes));
}

module.exports = new Save();