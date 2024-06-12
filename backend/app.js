const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());




app.post('/', (req, res) => {
 const { email, password } = req.body;
 res.json({ message: `Hello ${email}!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
