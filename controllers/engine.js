var Engine = require('../models/engine');

// List of all Engines 
exports.engine_list = async function (req, res) {
    try {
        theEngines = await Engine.find();
        res.send(theEngines);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.engine_view_all_Page = async function (req, res) {
    try {
        theEngines = await Engine.find();
        res.render('engines', { title: 'Engine Search Results', results: theEngines });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Engine. 
exports.engine_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Engine.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle Engine create on POST. 
exports.engine_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Engine();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.EngineType = req.body.EngineType;
    document.Cylinders = req.body.Cylinders;
    document.FuelType = req.body.FuelType;
    document.Transmission = req.body.Transmission;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Engine delete form on DELETE. 
exports.engine_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Engine.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle Engine update form on PUT. 
exports.engine_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Engine.findById(req.params.id)
        // Do updates of properties 
        if (req.body.EngineType)
            toUpdate.EngineType = req.body.EngineType;
        if (req.body.Cylinders)
            toUpdate.Cylinders = req.body.Cylinders;
        if (req.body.FuelType)
            toUpdate.FuelType = req.body.FuelType;
        if (req.body.Transmission)
            toUpdate.Transmission = req.body.Transmission;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
}; 

// Handle a show one view with id specified by query 
exports.engine_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Engine.findById(req.query.id) 
        res.render('enginedetails',{ title: 'Engine Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.engine_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('enginecreate', { title: 'Engine Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.engine_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Engine.findById(req.query.id) 
        res.render('engineupdate', { title: 'Engine Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle a delete one view with id from query 
exports.engine_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Engine.findById(req.query.id) 
        res.render('enginedelete', { title: 'Engine Delete', toShow:result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 