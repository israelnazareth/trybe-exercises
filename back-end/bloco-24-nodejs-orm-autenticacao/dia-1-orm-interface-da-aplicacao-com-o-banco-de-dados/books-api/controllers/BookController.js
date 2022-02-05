const { Book } = require('../models');

const getAllBooks = async (_req, res) => {
  try {
    const books = await Book.findAll();

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const createNewBook = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const overwriteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    await Book.update({
      title,
      author,
      pageQuantity,
    }, { where: { id } }
    );

    const newBook = await Book.findByPk(id);

    res.status(200).json(newBook);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    await book.destroy();

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' })
  }
}

module.exports = {
  getAllBooks,
  createNewBook,
  getBookById,
  overwriteBook,
  deleteBookById
};