const express = require('express');

const BookController = require('./controllers/BookController');

const app = express();
app.use(express.json());

app.route('/books')
  .get(BookController.getAllBooks)
  .post(BookController.createNewBook)

app.route('/books/:id')
  .get(BookController.getBookById)

const { PORT } = process.env || 8080;
app.listen(PORT, () => console.log(`Ouvindo porta ${PORT}`));
