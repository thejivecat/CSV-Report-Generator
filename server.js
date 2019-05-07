const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
app.use("/", express.static('client'));
app.use("/", bodyParser.text())

app.post("/", (req, res) => {
    console.log(req.body);
    res.end();
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));