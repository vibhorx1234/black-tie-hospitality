require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRoute);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Black Tie Hospitality API is running' });
});
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Black Tie Hospitality API is running' });
});

app.listen(PORT, () => {
  console.log(`✅ BTH Server running on http://localhost:${PORT}`);
});