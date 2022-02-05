const express = require('express');

const BookController = require('./controllers/BookController');

const app = express();
app.use(express.json());

app.get('/books', BookController.getAllBooks);

const { PORT } = process.env || 8080;
app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}`));
