const pool = require('../../db.js');
const queries = require("./queries.js");


const createHorizontalAlignment = (req, res) => {
    const {full_benchmark, related_benchmarks} = req.body;

    // check if horizontal alignment already exists
    pool.query(queries.getHorizontalAlignmentFromBenchmark, [full_benchmark], (error, results) => {
        if (results.rows.length) {
            res.send("Sorry, horizontal alignment already exists for this benchmark.");
            return;
        }

        pool.query(queries.createHorizontalAlignment, [full_benchmark, related_benchmarks], (error, results) => {
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