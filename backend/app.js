const express = require('express');
const cors = require('cors');

const entryRouter = require('./routers/entries')
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Homepage, no entries here!"
    })
})
app.use('/entries', entryRouter)

module.exports = app;