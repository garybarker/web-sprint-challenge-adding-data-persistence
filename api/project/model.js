const db = require('../../data/dbConfig');

function find () {
  return db('projects');
}

function findById(id) {
  return db('projects')
    .where({ 'project_id': id })
    .first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return findById(ids[0]);
    })
}

module.exports = { find, insert };