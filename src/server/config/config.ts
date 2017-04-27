let config = {
  jwtSecret: 'superdupersecretofREI',
  salt: 'DJEW*324KNAScsafAwe987y2e@#RWoihwefn98!',
  mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/ungclassifiedApp',
  port: process.env.PORT || 8000,
};

export default config
