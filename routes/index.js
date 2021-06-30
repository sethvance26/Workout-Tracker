const router = require('express').Router();
const apiRoutes = require('./api-routes');
const homeRoutes = require('./html-routes');

router.use('/', homeRoutes);
router.use('/', apiRoutes);

module.exports = router;
