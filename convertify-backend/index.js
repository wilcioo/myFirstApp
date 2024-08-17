const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const convertRoutes = require('./routes/convertRoutes');
app.use('/convert', convertRoutes);

app.get('/', (req, res) => {
    res.send('Convertify API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


