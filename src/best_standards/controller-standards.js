const pool = require('../../db.js');
const queries = require("./queries.js");


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

/*
const updateStandard = (req, res) => {
    const standard = req.params.full_standard;    
    pool.query(queries.getStandardByFullStandard, [standard], (error, results) => {
        
        if (!results.rows.length) {                          // if the standard does not exist...
            res.send("Sorry, standard does not exist.");
            return;
        }
    
        pool.query(queries.updateStandard, [standard], (err, results) => {
            if (err) throw err;
            res.status(200).send("Standard successfully updated.");
        });
    });
};
*/

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

module.exports = {
    getAllStandards,
    getStandardByFullStandard,
    createStandard,
    //updateStandard,
    deleteStandard
}