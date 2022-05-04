const { Router } = require('express');
const router = Router();

const controller = require('./controller');

router.post('/standards', controller.createStandard);
router.get('/standards', controller.getAllStandards);
router.get('/standards/:full_standard', controller.getStandardByFullStandard);
//router.put('/standards/:full_standard', controller.updateStandard);
router.delete('/standards/:full_standard', controller.deleteStandard);


router.post('/benchmarks', controller.createBenchmark);
router.get('/benchmarks', controller.getAllBenchmarks);
router.get('/benchmarks/:full_benchmark', controller.getBenchmarkByFullBenchmark);
//router.put('/benchmarks/:full_benchmark', controller.updateBenchmark);
router.delete('/benchmarks/:full_benchmark', controller.deleteBenchmark);


router.post('/horizontal_alignment', controller.createHorizontalAlignment);
router.get('/horizontal_alignment', controller.getAllHorizontalAlignments);
router.get('/horizontal_alignment/:full_benchmark', controller.getHorizontalAlignmentFromBenchmark);


module.exports = router;