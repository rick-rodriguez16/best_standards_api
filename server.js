const express = require('express');
const studentRoutes = require('./src/best_standards/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.use('/api/best_standards', studentRoutes);



app.listen(port, () => console.log(`app listening on port ${port}`));

