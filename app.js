const sequelize = require('./sequelize');

const User = require('./models/User'); // Adjust the path if necessary

// Sync all models that aren't already in the database
sequelize.sync();

User.create({ firstName: 'John', lastName: 'Doe' })
  .then((user) => {
    console.log('User created:', user.toJSON());
  })
  .catch((err) => {
    console.error('Failed to create user:', err);
  });
User.findAll().then((users) => {
  console.log('All users:', JSON.stringify(users, null, 2));
});

// Or to sync a specific model
// User.sync();
