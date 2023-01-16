module.exports = {
    development: {
      username: process.env.DB_DEVELOPMENT_USERNAME,
      password: process.env.DB_DEVELOPMENT_PASSWORD,
      database: process.env.DB_DEVELOPMENT_DATABASE,
      host: process.env.DB_DEVELOPMENT_HOST,
      port: process.env.DB_DEVELOPMENT_PORT,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    },
    test: {
      username: process.env.DB_TEST_USERNAME,
      password: process.env.DB_TEST_PASSWORD,
      database: process.env.DB_TEST_DATABASE,
      host: process.env.DB_TEST_HOST,
      port: process.env.DB_TEST_PORT,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    },
    production: {
      username: process.env.DB_PRODUCTION_USERNAME,
      password: process.env.DB_PRODUCTION_PASSWORD,
      database: process.env.DB_PRODUCTION_DATABASE,
      host: process.env.DB_PRODUCTION_HOST,
      port: process.env.DB_PRODUCTION_PORT,
      dialect: 'mysql',
      define: {
        timestamps: true,
        underscored: true
      }
    }
  };