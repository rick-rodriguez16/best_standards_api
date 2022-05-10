const pool = require('../../db.js');
const queries = require("./queries.js");


const createBenchmark = (req, res) => {
    const {full_benchmark, emphases, benchmark_def, examples, clarifications, terms, purpose, misconceptions, full_standard} = req.body;
    
    // check if benchmark already exists
    pool.query(queries.getBenchmarkByFullBenchmark, [full_benchmark], (error, results) => {
        
        if (results.rows.length) {                          // if array length returned > 0, benchmark exists and cannot be added
            res.send("Sorry, benchmark already exists.");
            return;
        }

        pool.query(queries.createBenchmark, [full_benchmark, emphases, benchmark_def, examples, clarifications, terms, purpose, misconceptions, full_standard], (error, results) => {
            if (error) throw error;
            res.status(201).send("Benchmark successfully created.");
        });
    });
};

const getAllBenchmarks = (req, res) => {
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

/*
const updateBenchmark = (req, res) => {
    const benchmark = req.params.full_benchmark;    
    pool.query(queries.getBenchmarkByFullBenchmark, [benchmark], (error, results) => {
        
        if (!results.rows.length) {                          // if the benchmark does not exist...
            res.send("Sorry, benchmark does not exist.");
            return;
        }
    
        pool.query(queries.updateBenchmark, [benchmark], (err, results) => {
            if (err) throw err;
            res.status(200).send("Benchmark successfully updated.");
        });
    });
};
*/

const deleteBenchmark = (req, res) => {
    const benchmark = req.params.full_benchmark;    
    pool.query(queries.getBenchmarkByFullBenchmark, [benchmark], (error, results) => {
        
        if (!results.rows.length) {                          // if the benchmark does not exist...
            res.send("Sorry, benchmark does not exist.");
            return;
        }
    
        pool.query(queries.deleteBenchmark, [benchmark], (err, results) => {
            if (err) throw err;
            res.status(200).send("Benchmark successfully deleted.");
        });
    });
};

module.exports = {
    createBenchmark,
    getAllBenchmarks,
    getBenchmarkByFullBenchmark,
    //updateBenchmark,
    deleteBenchmark
}