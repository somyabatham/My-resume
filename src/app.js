const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const port = process.env.PORT || 4000;

const Ragistration = require("./models/userregister");
require("./db/conn");
const app = express();

const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.sendFile(path.join(static_path, "index.html"));
});

app.post("/sendemail", async (req, res) => {
    try {
        const user = new Ragistration({
            fullName: req.body.fullName,
            emailAddress: req.body.emailAddress,
            phone: req.body.phone,
            subject: req.body.subject,
            body: req.body.body
        });

        const User_Data = await user.save();

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'mangalritik6@gmail.com', // your email
                pass: 'wpjy beod dewr rsmp' // your email password
            }
        });

        let mailOptions = {
            from: req.body.emailAddress,
            to: 'bathamsomya8@gmail.com',
            subject: req.body.subject,
            text: req.body.body
        };

        let info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        console.log(user)
        // res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.listen(port, function() {
    console.log(`App started on port ${port}`);
});








