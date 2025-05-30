import mongoose from "mongoose";

// Define the schema for each volume
const volumeSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String },
        downloadLink: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    // Simple URL validation
                    return /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(v);
                },
                message: (props) => `${props.value} is not a valid URL!`,
            },
        },
    },
    { _id: false }
);

// Define the main book schema
const bookSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        genre: { type: [String], default: [], index: true }, // Add index
        title: { type: String, required: true, index: true }, // Add index
        synopsis: { type: String },
        author: { type: String, required: true, index: true }, // Add index
        volumes: { type: [volumeSchema], default: [] },
    },
    { timestamps: true }
);

const Book = mongoose.model("Books", bookSchema);
export default Book;
