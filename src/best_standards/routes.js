const { Router } = require('express');
const router = Router();

const controller = require('./controller');

router.post('/standards', controller.createStandard);
router.get('/standards', controller.getAllStandards);
router.get('/standards/:full_standard', controller.getStandardByFullStandard);
router.delete('/standards/:full_standard', controller.deleteStandard);


router.post('/benchmarks', controller.createBenchmark);
router.get('/benchmarks', controller.getAllBenchmarks);
router.get('/benchmarks/:full_benchmark', controller.getBenchmarkByFullBenchmark);
router.delete('/benchmarks/:full_benchmark', controller.deleteBenchmark);


module.exports = router;