module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'wongames-do-user-10744654-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'defaultdb'),
        username: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'oB2qufv24dcw3jsg'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
