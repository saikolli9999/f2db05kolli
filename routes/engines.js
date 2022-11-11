var express = require('express'); 
const engine_controllers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', engine_controllers.engine_view_all_Page); 

module.exports = router;
