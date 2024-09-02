const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vaishnavvshegalee@gmail.com',
        pass: 'vaishnav@333'
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('ready to send');
    }
});

router.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: 'vaishnavvshegalee@gmail.com',
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
              <p>Name: ${email}</p>
              <p>Name: ${phone}</p>
              <p>Name: ${message}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({ code: 200, status: 'Message Sent' })
        }

    })

})