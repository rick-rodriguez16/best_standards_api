const { Router } = require('express');
const router = Router();

const controller = require('./controller');

router.get('/standards', controller.getAllStandards);
router.get('/standards/:full_standard', controller.getStandardByFullStandard);


router.post('/benchmarks', controller.createBenchmark);
router.get('/benchmarks', controller.getAllBenchmarks);
router.get('/benchmarks/:full_benchmark', controller.getBenchmarkByFullBenchmark);


module.exports = router;