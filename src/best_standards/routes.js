const { Router } = require('express');
const router = Router();

const standardsController = require('./controller-standards');
const benchmarkController = require('./controller-benchmarks');
const horizontalAlignmentController = require('./controller-horizontal-alignment');

router.post('/standards', standardsController.createStandard);
router.get('/standards', standardsController.getAllStandards);
router.get('/standards/:full_standard', standardsController.getStandardByFullStandard);
//router.put('/standards/:full_standard', standardsController.updateStandard);
router.delete('/standards/:full_standard', standardsController.deleteStandard);


router.post('/benchmarks', benchmarkController.createBenchmark);
router.get('/benchmarks', benchmarkController.getAllBenchmarks);
router.get('/benchmarks/:full_benchmark', benchmarkController.getBenchmarkByFullBenchmark);
//router.put('/benchmarks/:full_benchmark', benchmarkController.updateBenchmark);
router.delete('/benchmarks/:full_benchmark', benchmarkController.deleteBenchmark);


router.post('/horizontal_alignment', horizontalAlignmentController.createHorizontalAlignment);
router.get('/horizontal_alignment', horizontalAlignmentController.getAllHorizontalAlignments);
router.get('/horizontal_alignment/:full_benchmark', horizontalAlignmentController.getHorizontalAlignmentFromBenchmark);


module.exports = router;