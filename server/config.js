const config = {
  rethinkDb: {
    host: 'localhost',
    db: 'rernstarter',
    port: '28015'
  },
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
};

module.exports = config;
