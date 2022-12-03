const express = require('express')
const Book = require('../models/Book')



const router = express.Router()
module.exports = router





router.post("/addBook", async (req, res) => {
    const b = req.body

    if (b.title.length > 30) res.json({error_code: 400, error_message: "Der Title darf nicht länger als 30 Zeichen lang sein!"})
    else if (b.author.length > 20) res.json({error_code: 400, error_message: "Der Name des Authors darf nicht länger als 20 Zeichen lang sein!"})
    else if (b.published > new Date().getTime()) {
        res.json({error_code: 400, error_message: "Das Veröffentlichkeitsdatum kann nicht in der Zukunft liegen!"})
    }
    else if (!b.cover.includes("data:image/png;base64,")) res.json({error_code: 400, error_message: "Das Bildformat für das Cover ist ungültig!"})
    else if (b.length <= 0) res.json({error_code: 400, error_message: "Die Länge des Buches kann nicht 0 oder kleiner sein!"})
    else if (b.stars <= 0) res.json({error_code: 400, error_message: "Die Bewertung des Buches ist ungültig!"})
    else if (b.stars > 10) res.json({error_code: 400, error_message: "Die Bewertung des Buches ist ungültig!"})
    
    else {
        const data = new Book({
            title: b.title,
            author: b.author,
            published: b.published,
            cover: b.cover,
            length: b.length,
            stars: b.stars,
            tags: b.tags
        })
    
        try {
            const dataToSave = await data.save()
            res.status(200).json(dataToSave)
        }
        catch (error){
            res.status(400).json({message: error.message})
        }
    }
    
})


router.get("/getAll", async (req, res) => {
    try{
        const data = await Book.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get("/getById/:id", async (req, res) => {
    try{
        const data = await Book.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get("/getBooksByName/:name", async (req, res) => {
    try{
        const data = await Book.find(req.params.name)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


