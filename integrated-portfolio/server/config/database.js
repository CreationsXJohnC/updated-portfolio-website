import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize; 

if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
  // Production environment (Vercel)
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Vercel Postgres requires this
      }
    },
    logging: false,
  });
} else {
  // Development environment (local)
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: console.log,
  });
}

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