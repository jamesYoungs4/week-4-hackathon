const { Router } = require('express');

const entryController = require('../controllers/entries');

const entryRouter = Router();

entryRouter.get('/', entryController.index);
entryRouter.get('/id=:id', entryController.show);
entryRouter.post('/', entryController.create);
entryRouter.patch('/id=:id', entryController.update);
entryRouter.delete('/id=:id', entryController.destroy);
entryRouter.get('/category=:c', entryController.categorySearch)
entryRouter.get('/date=:d', entryController.dateSearch);

module.exports = entryRouter;