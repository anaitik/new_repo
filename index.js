const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, Fuka-chan!');
});

app.get('/about', (req, res) => {
    res.send('About Fuka-chan');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

