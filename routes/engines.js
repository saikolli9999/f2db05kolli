var express = require('express'); 
const engine_controllers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', engine_controllers.engine_view_all_Page); 
router.get('/detail', engine_controllers.engine_view_one_Page);
/* GET create costume page */ 
router.get('/create', engine_controllers.engine_create_Page);

/* GET create update page */ 
router.get('/update', engine_controllers.engine_update_Page);
/* GET delete costume page */ 
router.get('/delete', engine_controllers.engine_delete_Page); 

module.exports = router;
