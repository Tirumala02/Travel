const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Create the transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

app.post('/send-email', async (req, res) => {
  const { formData } = req.body;
  console.log(formData);

  // Mail to the client
  // Mail to the client
const clientMailOptions = {
  from: process.env.EMAIL_USER,
  to: formData.email,
  subject: `Kumbh Mela Booking Confirmation for ${formData.name}`,
  text: `
  Dear ${formData.name},

  🌟 **Thank you for your interest in attending Kumbh Mela 2025!** 🌟

  We are excited to confirm your booking for this spiritual and cultural experience. Below are the details we have received for your registration:

  --------------------------------------------------------------
  **Booking Details:**
  - **Name**: ${formData.name}
  - **Email**: ${formData.email}
  - **Phone**: ${formData.phone}
  - **Preferred Dates**: ${formData.dates}

  🕉️ **What to Expect:**
  The Kumbh Mela is an extraordinary spiritual gathering, and we are thrilled to have you join us. Over the course of the event, you'll have the opportunity to:
  - Participate in sacred rituals and ceremonies.
  - Experience cultural performances and religious discourses.
  - Explore the vibrant stalls and exhibitions showcasing art, food, and crafts.
  
  📅 **Event Dates**: January 13, 2025 – February 26, 2025

  We will send you further details as the event approaches, including travel tips and guides on how to make the most of your visit.

  In the meantime, feel free to reach out if you have any questions or need assistance. Our team is here to support you every step of the way.

  Looking forward to seeing you at Kumbh Mela 2025!

  Best regards,  
  The Kumbh Mela Team
  
  📧 Contact Us: ${process.env.EMAIL_USER}
  `,

  html: `
  <p>Dear <strong>${formData.name}</strong>,</p>

  <p style="font-size: 18px; color: #4CAF50;"><strong>🌟 Thank you for your interest in attending Kumbh Mela 2025! 🌟</strong></p>

  <p>We are excited to confirm your booking for this spiritual and cultural experience. Below are the details we have received for your registration:</p>

  <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
    <tr style="background-color: #f4f4f4;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${formData.email}</td>
    </tr>
    <tr style="background-color: #f4f4f4;">
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;"><strong>Preferred Dates</strong></td>
      <td style="padding: 10px; border: 1px solid #ddd;">${formData.dates}</td>
    </tr>
  </table>

  <p style="margin-top: 20px; font-size: 16px;">🕉️ <strong>What to Expect:</strong></p>
  <ul>
    <li>Participate in sacred rituals and ceremonies.</li>
    <li>Experience cultural performances and religious discourses.</li>
    <li>Explore the vibrant stalls and exhibitions showcasing art, food, and crafts.</li>
  </ul>

  <p style="font-size: 16px; font-weight: bold;">📅 Event Dates: January 13, 2025 – February 26, 2025</p>

  <p>We will send you further details as the event approaches, including travel tips and guides on how to make the most of your visit.</p>

  <p>In the meantime, feel free to reach out if you have any questions or need assistance. Our team is here to support you every step of the way.</p>

  <p>Looking forward to seeing you at Kumbh Mela 2025!</p>

  <p style="font-weight: bold;">Best regards,</p>
  <p>The Kumbh Mela Team</p>

  <p>📧 Contact Us: ${process.env.EMAIL_USER}</p>
  `
};


  // Mail to the admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Add admin's email in .env as ADMIN_EMAIL
    subject: `New Booking Information from ${formData.name}`,
    text: `New booking received:\n
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Dates: ${formData.dates}
    \nPlease follow up with the client.\n\nBest Regards,\nKumbh Mela Team`
  };

  try {
    // Send email to the client
    await transporter.sendMail(clientMailOptions);

    // Send email to the admin
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
