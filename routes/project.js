var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  // query for the specific project and
  // call the following callback
  // 
  models.Project.find({_id : projectID}).exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  var project = new models.Project(form_data);
  project.save(function(err) {
    if(err) {
      console.log(err);
      res.end();
    } else {
      res.send('OK');
    }
  });

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;
  models.Project.remove({_id : projectID}, function(err){
  if(err) {
      console.log(err);
  } else {
    res.send('OK');
  }
  });
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}