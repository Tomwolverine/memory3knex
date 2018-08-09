// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///game-server'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
