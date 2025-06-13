import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./routes/book.routes.js";
import userRoute from "./routes/user.routes.js";

const app = express();

// connecting middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// displaying port status
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
