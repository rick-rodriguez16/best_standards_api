const pool = require('../../db.js');
const queries = require("./queries.js");


const createHorizontalAlignment = (req, res) => {
    const {full_benchmark, related_benchmark1, related_benchmark2, related_benchmark3, related_benchmark4, related_benchmark5, related_benchmark6, related_benchmark7, related_benchmark8, related_benchmark9, related_benchmark10, related_benchmark11, related_benchmark12} = req.body;

    // check if horizontal alignment already exists
    pool.query(queries.getHorizontalAlignmentFromBenchmark, [full_benchmark], (error, results) => {
        if (results.rows.length) {
            res.send("Sorry, horizontal alignment already exists for this benchmark.");
            return;
        }

        pool.query(queries.createHorizontalAlignment, [full_benchmark, related_benchmark1, related_benchmark2, related_benchmark3, related_benchmark4, related_benchmark5, related_benchmark6, related_benchmark7, related_benchmark8, related_benchmark9, related_benchmark10, related_benchmark11, related_benchmark12], (error, results) => {
            if (error) throw error;
            res.status(201).send("Horizontal alignment successfully created for this benchmark.");
        });
    });
};

const getAllHorizontalAlignments = (req, res) => {
    pool.query(queries.getAllHorizontalAlignments, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const getHorizontalAlignmentFromBenchmark = (req, res) => {
    const horizontalAlignment = req.params.full_benchmark;
    pool.query(queries.getHorizontalAlignmentFromBenchmark, [horizontalAlignment], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    });
};


module.exports = {
    createHorizontalAlignment,
    getAllHorizontalAlignments,
    getHorizontalAlignmentFromBenchmark
}