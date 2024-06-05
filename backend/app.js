const express = require('express');
const app = express();

app.use(express.json());

app.post('/home', (req, res) => {
 const { controller, value } = req.body;
 console.log(`${controller} ${value}`);

 res.json({ message: `${controller} ${value}` });
});

app.get('/nieco', (req, res) => {
 res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
