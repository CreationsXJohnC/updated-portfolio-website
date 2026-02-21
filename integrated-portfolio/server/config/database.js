import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || {
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.NODE_ENV === 'production' 
    ? '/tmp/database.sqlite' 
    : (process.env.DB_STORAGE || './database.sqlite'),
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test the connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    console.log('⚠️ Continuing with mock data for development/demo purposes');
    return false;
  }
};

export { sequelize };
export default sequelize;