
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('replies').del()
    .then(function () {
      // Inserts seed entries
      return knex('replies').insert([
        {id: 1, reply: 'GTFO', imageURL:'URL'},
        {id: 2, reply: 'LOLS', imageURL:'URL'},
        {id: 3, reply: 'WTF', imageURL:'URL'}
      ]);
    });
};
