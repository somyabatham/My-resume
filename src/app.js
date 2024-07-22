const express = require("express");
const path = require("path");
const multer = require("multer");
const upload = multer(); // Middleware to handle multipart/form-data

const port = process.env.PORT || 4000;

const Registration = require("./models/userregister"); // Corrected the variable name
require("./db/conn");
const app = express();

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Changed to true for better handling of URL-encoded data
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.sendFile(path.join(static_path, "index.html"));
});

app.post("/sendemail", upload.none(), async (req, res) => {
    try {
        const { fullName, emailAddress, phone, subject, body } = req.body;

        // Log received request body
        console.log("Received request body:", req.body);

        // Validate request data
        const validationErrors = [];
        if (!fullName) validationErrors.push("Full Name is required.");
        if (!emailAddress) validationErrors.push("Email Address is required.");
        if (!phone) validationErrors.push("Phone is required.");
        if (!subject) validationErrors.push("Subject is required.");
        if (!body) validationErrors.push("Body is required.");

        if (validationErrors.length > 0) {
            console.log("Validation Errors: ", validationErrors); // Log validation errors for debugging
            return res.status(400).send({ error: validationErrors.join(" ") });
        }

        // Save user data
        const user = new Registration({
            fullName,
            emailAddress,
            phone,
            subject,
            body
        });

        const User_Data = await user.save();
        console.log("User saved:", user);
        res.status(200).send({ message: "message send successfully" });
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.listen(port, function() {
    console.log(`App started on port ${port}`);
});
