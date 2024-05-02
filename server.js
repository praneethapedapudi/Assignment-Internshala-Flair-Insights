const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    // Here you can handle the form submission, such as storing the data in a database
    res.send(`<h2>Submitted Data:</h2><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
