const router = require('express').Router();
const routes = require('./routes');

router.use('/notes', routes);

module.exports = router;