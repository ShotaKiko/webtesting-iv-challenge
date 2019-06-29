
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inn').del()
    .then(function () {
      // Inserts seed entries
      return knex('inn').insert([
        {name: 'Innkeeper'},
        {name: 'Shoats'},
        {name: 'Kerbs'}
      ]);
    });
};
