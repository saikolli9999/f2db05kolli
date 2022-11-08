var Engine = require('../models/engine'); 
 
// List of all Engines 
exports.engine_list = async function(req, res) { 
    try{ 
        theEngines = await Engine.find(); 
        res.send(theEngines); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.engine_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.engine_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.engine_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.engine_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine update PUT' + req.params.id); 
}; 