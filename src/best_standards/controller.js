const pool = require('../../db.js');
const queries = require("./queries.js")


const createStandard = (req, res) => {
    const {full_standard, standard_def, content, content_name, grade, strand, strand_def, standard_no} = req.body;
    
    // check if standard already exists
    pool.query(queries.getStandardByFullStandard, [full_standard], (error, results) => {
        
        if (results.rows.length) {                          // if array length returned > 0, benchmark exists and cannot be added
            res.send("Sorry, standard already exists.");
            return;
        }

        pool.query(queries.createStandard, [full_standard, standard_def, content, content_name, grade, strand, strand_def, standard_no], (error, results) => {
            if (error) throw error;
            res.status(201).send("Standard successfully created.");
        });
    });
};

const getAllStandards = (req, res) => {
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

const deleteStandard = (req, res) => {
    const standard = req.params.full_standard;    
    pool.query(queries.getStandardByFullStandard, [standard], (error, results) => {
        
        if (!results.rows.length) {                          // if the standard does not exist...
            res.send("Sorry, standard does not exist.");
            return;
        }
    
        pool.query(queries.deleteStandard, [standard], (err, results) => {
            if (err) throw err;
            res.status(200).send("Standard successfully deleted.");
        });
    });
};



const createBenchmark = (req, res) => {
    const {full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no} = req.body;
    
    // check if benchmark already exists
    pool.query(queries.getBenchmarkByFullBenchmark, [full_benchmark], (error, results) => {
        
        if (results.rows.length) {                          // if array length returned > 0, benchmark exists and cannot be added
            res.send("Sorry, benchmark already exists.");
            return;
        }

        pool.query(queries.createBenchmark, [full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no], (error, results) => {
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
    getAllStandards,
    getStandardByFullStandard,
    createStandard,
    deleteStandard,
    createBenchmark,
    getAllBenchmarks,
    getBenchmarkByFullBenchmark,
    deleteBenchmark,
}