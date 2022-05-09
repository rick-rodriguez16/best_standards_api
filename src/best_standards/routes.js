const { Router } = require('express');
const router = Router();

const standardController = require('./controller-standards');
const benchmark_Kthru2_Controller = require('./controller-benchmarks-kthru2');
const benchmarkController = require('./controller-benchmarks');
const horizontalAlignmentController = require('./controller-horizontal-alignment');

router.post('/standards', standardController.createStandard);
router.get('/standards', standardController.getAllStandards);
router.get('/standards/:full_standard', standardController.getStandardByFullStandard);
//router.put('/standards/:full_standard', standardsController.updateStandard);
router.delete('/standards/:full_standard', standardController.deleteStandard);

// controllers for the benchmark_kthru2 TABLE
// these controllers will be obsoleted once the new benchmarks TABLE is populated with all grade level info
router.post('/benchmarksKthru2', benchmark_Kthru2_Controller.createBenchmark);
router.get('/benchmarksKthru2', benchmark_Kthru2_Controller.getAllBenchmarks);
router.get('/benchmarksKthru2/:full_benchmark', benchmark_Kthru2_Controller.getBenchmarkByFullBenchmark);
//router.put('/benchmarksKthru12/:full_benchmark', benchmark_Kthru2_Controller.updateBenchmark);
router.delete('/benchmarksKthru2/:full_benchmark', benchmark_Kthru2_Controller.deleteBenchmark);


// controllers for the new benchmark TABLE that will reflect all grades.
// This will first be used to update grades 3-12.  Then, grades k-2 can be revisted and updated using these controllers.
router.post('/benchmarks', benchmarkController.createBenchmark);
router.get('/benchmarks', benchmarkController.getAllBenchmarks);
router.get('/benchmarks/:full_benchmark', benchmarkController.getBenchmarkByFullBenchmark);
//router.put('/benchmarksKthru12/:full_benchmark', benchmarkController.updateBenchmark);
router.delete('/benchmarks/:full_benchmark', benchmarkController.deleteBenchmark);


router.post('/horizontal_alignment', horizontalAlignmentController.createHorizontalAlignment);
router.get('/horizontal_alignment', horizontalAlignmentController.getAllHorizontalAlignments);
router.get('/horizontal_alignment/:full_benchmark', horizontalAlignmentController.getHorizontalAlignmentFromBenchmark);


module.exports = router;