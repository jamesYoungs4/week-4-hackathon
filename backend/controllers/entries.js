const Entry = require('../models/Entry');

async function index(req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneByID(id);
        res.status(200).json(entry);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const entry = await Entry.createEntry(data)
        res.status(201).json(entry);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const entry = await Entry.getOneByID(id);
        const result = await entry.updateEntry(data);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

async function destroy(req, res) {
    try {
        const id = req.params.id;
        const entry = await Entry.getOneByID(id);
        const result = await entry.deleteEntry();
        res.status(204).json(result);
    } catch (error) {
        res.status(404).json({error: error.message})
    }    
}

async function categorySearch(req, res) {
    try {
        const cat = req.params.c;
        const entries = await Entry.searchByCategory(cat);
        res.status(200).json(entries)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
    
}

module.exports = {
    index, show, create, update, destroy, categorySearch
}