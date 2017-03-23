exports.up = function(knex, Promise) {
  return knex.schema.createTable('replies', function (table) {
    table.increments();
    table.string('reply');
    table.string('imageURL');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('replies')
};
