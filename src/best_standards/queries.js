
// queries for the standard TABLE
const createStandard = "INSERT INTO standard (full_standard, standard_def, content, content_name, grade, strand, strand_def, standard_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const getAllStandards = "SELECT * FROM standard";
const getStandardByFullStandard = "SELECT * FROM standard WHERE full_standard = $1";
//const updateStandard = 
const deleteStandard = "DELETE FROM standard WHERE full_standard = $1";

// queries for the benchmark_kthru12 TABLE
// this table will be obsoleted once the new benchmarks TABLE is populated with all grade level info
const createBenchmark_Kthru2 = "INSERT INTO benchmarks_kthru2 (full_benchmark, benchmark_def, example1, example2, example3, clarification1, clarification2, clarification3, clarification4, purpose, misconception1, misconception2, misconception3, misconception4, misconception5, terms, full_standard, emphasis1, emphasis2, emphasis3, emphasis4, emphasis5, benchmark_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)";
const getAllBenchmarks_Kthru2 = "SELECT * FROM benchmarks_kthru2";
const getBenchmarkByFullBenchmark_Kthru2 = "SELECT * FROM benchmarks_kthru2 WHERE full_benchmark = $1";
//const updateBenchmark = 
const deleteBenchmark_Kthru2 = "DELETE FROM benchmarks_kthru2 WHERE full_benchmark = $1";


// queries for the new benchmark TABLE that will reflect all grades.
// This will first be updated with grades 3-12.  Then, grades k-2 can be revisted and moved using these queries.
const createBenchmark = "INSERT INTO benchmarks (full_benchmark, emphases, benchmark_def, examples, clarifications, terms, purpose, misconceptions, full_standard) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);";
const getAllBenchmarks = "SELECT * FROM benchmarks";
const getBenchmarkByFullBenchmark = "SELECT * FROM benchmarks WHERE full_benchmark = $1";
const deleteBenchmark = "DELETE FROM benchmarks WHERE full_benchmark = $1";


// queries for the horizontal_alignment TABLE
const createHorizontalAlignment = "INSERT INTO horizontal_alignment(full_benchmark, related_benchmarks) VALUES ($1, $2)";
const getAllHorizontalAlignments = "SELECT * FROM horizontal_alignment";
const getHorizontalAlignmentFromBenchmark = "SELECT * FROM horizontal_alignment WHERE full_benchmark = $1";


module.exports = {
    createStandard,
    getAllStandards,
    getStandardByFullStandard,
    //updateStandard,
    deleteStandard,
    createBenchmark_Kthru2,
    getAllBenchmarks_Kthru2,
    getBenchmarkByFullBenchmark_Kthru2,
    //updateBenchmark,
    deleteBenchmark_Kthru2,
    createBenchmark,
    getAllBenchmarks,
    getBenchmarkByFullBenchmark,
    deleteBenchmark,
    createHorizontalAlignment,
    getAllHorizontalAlignments,
    getHorizontalAlignmentFromBenchmark
}