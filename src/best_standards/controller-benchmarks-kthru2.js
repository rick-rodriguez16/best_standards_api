const pool = require('../../db.js');
const queries = require("./queries.js");


const createBenchmark = (req, res) => {
    const {full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no} = req.body;
    
    // check if benchmark already exists
    pool.query(queries.getBenchmarkByFullBenchmark_Kthru2, [full_benchmark], (error, results) => {
        
        if (results.rows.length) {                          // if array length returned > 0, benchmark exists and cannot be added
            res.send("Sorry, benchmark already exists.");
            return;
        }

        pool.query(queries.createBenchmark_Kthru2, [full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no], (error, results) => {
            if (error) throw error;
            res.status(201).send("Benchmark successfully created.");
        });
    });
};

const getAllBenchmarks = (req, res) => {
    pool.query(queries.getAllBenchmarks_Kthru2, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
};

const getBenchmarkByFullBenchmark = (req, res) => {
    const benchmark = req.params.full_benchmark;
    pool.query(queries.getBenchmarkByFullBenchmark_Kthru2, [benchmark], (err, results) => {
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
    pool.query(queries.getBenchmarkByFullBenchmark_Kthru2, [benchmark], (error, results) => {
        
        if (!results.rows.length) {                          // if the benchmark does not exist...
            res.send("Sorry, benchmark does not exist.");
            return;
        }
    
        pool.query(queries.deleteBenchmark_Kthru2, [benchmark], (err, results) => {
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