var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);


// POST /todos
router.post('/', skillsCtrl.create);

// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
