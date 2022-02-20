const express = require('express');
const app = express();
app.use(express.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/date-and-time.html');
});

const PORT = 3600;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});