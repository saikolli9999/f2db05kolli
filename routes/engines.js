var express = require('express'); 
const engine_controllers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', engine_controllers.engine_view_all_Page); 
router.get('/detail', engine_controllers.engine_view_one_Page);
/* GET create costume page */ 
router.get('/create', engine_controllers.engine_create_Page);  

module.exports = router;
