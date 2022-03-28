const pool = require('../../db.js');
const queries = require("./queries.js")


const getStandards = (req, res) => {
    pool.query(queries.getAllStandards, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const getStandardByFullStandard = (req, res) => {
    const standard = req.params.full_standard;
    pool.query(queries.getStandardByFullStandard, [standard], (err, results) => {
        res.status(200).json(results.rows);
    });
};


const getBenchmarks = (req, res) => {
    pool.query(queries.getAllBenchmarks, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const getBenchmarkByFullBenchmark = (req, res) => {
    const benchmark = req.params.full_benchmark;
    pool.query(queries.getBenchmarkByFullBenchmark, [benchmark], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getStandards,
    getStandardByFullStandard,
    getBenchmarks,
    getBenchmarkByFullBenchmark,
}