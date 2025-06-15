import Genre from "../model/genre.model.js";

export const getGenres = async (req, res) => {
    try {
        const genre = await Genre.find();
        res.status(200).json(genre); // shows success status and returns the genre array
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: error.message }); // internal server error
    }
};
