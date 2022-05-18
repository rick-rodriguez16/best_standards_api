const express = require('express');
const bestStandardsRoutes = require('./src/best_standards/routes');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the B.E.S.T. Standards backend");
});

app.use('/api/best_standards', bestStandardsRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
