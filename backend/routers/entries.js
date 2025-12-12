const { Router } = require('express');

const entryController = require('../controllers/entries');

const entryRouter = Router();

entryRouter.get('/', entryController.index);