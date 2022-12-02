const express = require('express');
const Book = require('../models/Book');



const router = express.Router();
module.exports = router;



router.post("/post", async (req, res) => {
    const data = new Book({
        title: req.body.title,
        author: req.body.author,
        published: req.body.published,
        length: req.body.length,
        stars: req.body.stars
    });

    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
})


router.get("/getAll/:id", (req, res) => {
    res.send(req.params.id);
})
