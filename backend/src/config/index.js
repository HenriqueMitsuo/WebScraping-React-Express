import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.SERVER_PORT,
  secret: {
    jwt: process.env.JWT_SECRET,
    jwtExp: process.env.JWT_EXP,
  },
  dbUrl: process.env.MONGO_DBURL,
};

export default config;
