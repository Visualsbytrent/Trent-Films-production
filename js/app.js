';'.js/app.js

```javascript
const bookingForm = document.getElementById("bookingForm")

if (bookingForm) {

    bookingForm.addEventListener("submit", async (e) => {

        e.preventDefault()

        const bookingData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            eventDate: document.getElementById("eventDate").value,
            eventType: document.getElementById("eventType").value,
            message: document.getElementById("message").value
        }

        try {

            const response = await fetch("http://localhost:5000/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            })

            const data = await response.json()

            alert(data.message)

            bookingForm.reset()

        } catch (error) {
            console.log(error)
        }
    })
}
```





```json
{
  "name": "photography-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.18.2",
    "nodemailer": "^6.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```




```bash
npm install
```


```


';' /bookingRoutes.js
javascript
const express = require("express")
const router = express.Router()
const { createBooking } = require("../controllers/bookingController")

router.post("/", createBooking)

module.exports = router
```


';' .controllers/bookingController.js

```javascript
const nodemailer = require("nodemailer")

const createBooking = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            eventDate,
            eventType,
            message
        } = req.body

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "YOUR_EMAIL@gmail.com",
                pass: "YOUR_APP_PASSWORD"
            }
        })

        await transporter.sendMail({
            from: email,
            to: "YOUR_EMAIL@gmail.com",
            subject: "New Booking Request",
            html: `
                
        