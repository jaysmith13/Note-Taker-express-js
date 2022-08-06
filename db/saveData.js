const util = require('utils');
const fs = require('fs');
const { notStrictEqual } = require('assert');


























//Delete Note
deleteNote(id){
    .then(note => notes.filter(note => note.id !== parseInt(id)))
    .then(filteredNotes => this.write(filteredNotes));
}




module.exports = new Save();