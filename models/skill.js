const skills = [
    { id: 1, skill: "Javascript", learned: true },
    { id: 2, skill: "Python", learned: false },
    { id: 3, skill: "MongoDB", learned: false },
];



module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
}




function deleteOne(id) {
    id = parseInt(id);
    // skills = skills.filter(t => t.id !== id);
    // Another approach
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills should not be "done"
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
