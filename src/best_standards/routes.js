const { Router } = require('express');
const router = Router();

const controller = require('./controller');

router.get('/standards', controller.getStandards);
router.get('/standards/:full_standard', controller.getStandardByFullStandard);

router.get('/benchmarks', controller.getBenchmarks);
router.get('/benchmarks/:full_benchmark', controller.getBenchmarkByFullBenchmark);

module.exports = router;