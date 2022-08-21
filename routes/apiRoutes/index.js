const router = require('express').Router();
const fs = require('fs');
const saveData = require('../../db/notes');
const { route } = require('../htmlRoutes/index.js');

//get request

 router.get('/notes', function (req, res){
   // saveData
  //  .retrieveNotes()
 //   .then(notes => res.json(notes))
 //   .catch(err => res.status(500).json(err));
fs.readFile("db/db.json",function(error,data){
    console.log(error)
    console.log(data)
        res.json(JSON.parse(data))
})
});

//post request

router.post('/notes', (req, res) => {
   // saveData
    //.addNote(req.body)
    //.then((note) => res.json(note))
    //.catch(err => res.status(500).json(err));
    fs.readFile("db/db.json",function(error,data){
        console.log(error)
        console.log(data)
        const notes = JSON.parse(data)
        notes.push(req.body)
        fs.writeFile("db/db.json", JSON.stringify(notes),function(error,data){
            res.json(req.body)
        })
            
    })
});

//delete request


router.delete('/notes/:id', function(req, res){
    saveData
    .deleteNote(req.params.id)
    .then(() => res.json ({ok : true}))
    .catch(err => res.status(500).json(err));

});

module.exports = router;