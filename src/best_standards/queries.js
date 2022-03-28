
// queries for the standard TABLE
const getAllStandards = "SELECT * FROM standard";
const getStandardByFullStandard = "SELECT * FROM standard WHERE full_standard = $1";

// queries for the benchmark TABLE
const getAllBenchmarks = "SELECT * FROM benchmark";
const getBenchmarkByFullBenchmark = "SELECT * FROM benchmark WHERE full_benchmark = $1";

module.exports = {
    getAllStandards,
    getStandardByFullStandard,
    getAllBenchmarks,
    getBenchmarkByFullBenchmark,
}