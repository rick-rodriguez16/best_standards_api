
// queries for the standard TABLE
const createStandard = "INSERT INTO standard (full_standard, standard_def, content, content_name, grade, strand, strand_def, standard_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const getAllStandards = "SELECT * FROM standard";
const getStandardByFullStandard = "SELECT * FROM standard WHERE full_standard = $1";
const deleteStandard = "DELETE FROM standard WHERE full_standard = $1";

// queries for the benchmark TABLE
const createBenchmark = "INSERT INTO benchmark (full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)";
const getAllBenchmarks = "SELECT * FROM benchmark";
const getBenchmarkByFullBenchmark = "SELECT * FROM benchmark WHERE full_benchmark = $1";
const deleteBenchmark = "DELETE FROM benchmark WHERE full_benchmark = $1";

module.exports = {
    createStandard,
    getAllStandards,
    getStandardByFullStandard,
    deleteStandard,
    createBenchmark,
    getAllBenchmarks,
    getBenchmarkByFullBenchmark,
    deleteBenchmark
}