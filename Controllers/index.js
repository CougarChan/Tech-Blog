const router = require('express').Router();
const apiRoutes = require ('./API');
const dashboardRoutes = require('../Controllers/DashBoard.js');
const homeRoutes = require('./HomeRoutes.js');



//All ROUTER USES
router.use('/', homeRoutes);
router.use('/Dashboard', dashboardRoutes);
router.use('/API', apiRoutes );
module.exports = router;
