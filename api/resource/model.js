// build your `Resource` model here

const db = require('../../data/dbConfig');

function find() {
  return db('resources');
}

function findById(id) {
  return db('resources')
    .where({ 'resource_id': id })
    .first();
}

function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return findById(ids[0]);
    });
}

module.exports = { find, insert }