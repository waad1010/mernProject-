const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a database connection
mongoose.connect(
    "mongodb+srv://waadshkier10:<db_password>@mern1.tiae5u6.mongodb.net/

/
)
.then(() => console. log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
             "Content-Type",
             "Authorization",
             "Cache-Control",
             "Pragma",
             "Expires"
        ],
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
