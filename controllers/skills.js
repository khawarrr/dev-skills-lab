const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    // we provide the path for the subsequent GET request
    res.redirect('/skills')
  }

function create(req, res) {
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }


function newSkill(req, res) {
    res.render('skills/new');
  }

function index(req, res) {
    const devSkills = Skill.getAll();
    res.render('skills/index', {devSkills}); 
}

function show(req, res) {
    const devSkill = Skill.getOne(req.params.id);
    // console.log(devSkill)
    res.render('skills/show' ,{devSkill});
}
