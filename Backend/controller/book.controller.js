import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book); // shows success status and returns the books array
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.message }); // internal server error
    } 
};
