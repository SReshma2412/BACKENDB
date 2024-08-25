const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = 'ReshmaS24122003';
    const email = 'reshma.s2021c@vitstudent.ac.in';
    const roll_number = '21BIT0700';

    const numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
        }
    });

    const highest_alphabet = alphabets.length ? [alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).pop()] : [];

    res.status(200).json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
