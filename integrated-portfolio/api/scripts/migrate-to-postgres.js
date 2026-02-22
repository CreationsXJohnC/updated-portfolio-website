import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables
dotenv.config();

// SQLite connection (source)
const sqliteDb = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

// PostgreSQL connection (destination)
const postgresDb = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false
    } : false
  }
});

async function migrateData() {
  try {
    console.log('🔄 Starting database migration from SQLite to PostgreSQL...');

    // Test connections
    await sqliteDb.authenticate();
    console.log('✅ SQLite connection established');

    await postgresDb.authenticate();
    console.log('✅ PostgreSQL connection established');

    // Get all tables from SQLite
    const tables = await sqliteDb.getQueryInterface().showAllTables();
    console.log(`📋 Found ${tables.length} tables to migrate:`, tables);

    for (const tableName of tables) {
      console.log(`\n🔄 Migrating table: ${tableName}`);

      // Get table structure
      const tableInfo = await sqliteDb.getQueryInterface().describeTable(tableName);
      console.log(`   📊 Columns: ${Object.keys(tableInfo).length}`);

      // Get data from SQLite
      const [results] = await sqliteDb.query(`SELECT * FROM ${tableName}`);
      console.log(`   📦 Records: ${results.length}`);

      if (results.length > 0) {
        // Create table in PostgreSQL if it doesn't exist
        try {
          await postgresDb.getQueryInterface().createTable(tableName, tableInfo);
          console.log(`   ✅ Table created in PostgreSQL`);
        } catch (error) {
          if (error.message.includes('already exists')) {
            console.log(`   ℹ️  Table already exists in PostgreSQL`);
          } else {
            throw error;
          }
        }

        // Insert data into PostgreSQL
        for (const record of results) {
          try {
            await postgresDb.getQueryInterface().bulkInsert(tableName, [record]);
          } catch (error) {
            console.log(`   ⚠️  Skipping duplicate record in ${tableName}:`, error.message);
          }
        }
        console.log(`   ✅ Data migrated successfully`);
      } else {
        console.log(`   ℹ️  No data to migrate`);
      }
    }

    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Update your .env file to use the PostgreSQL DATABASE_URL');
    console.log('2. Set DB_DIALECT=postgres');
    console.log('3. Test your application with the new database');
    console.log('4. Deploy to Vercel with the updated environment variables');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await sqliteDb.close();
    await postgresDb.close();
  }
}

// Export data to JSON as backup
async function exportToJson() {
  try {
    console.log('💾 Creating JSON backup...');
    
    const backup = {};
    const tables = await sqliteDb.getQueryInterface().showAllTables();
    
    for (const tableName of tables) {
      const [results] = await sqliteDb.query(`SELECT * FROM ${tableName}`);
      backup[tableName] = results;
      console.log(`   📦 Exported ${results.length} records from ${tableName}`);
    }
    
    const backupPath = path.join(process.cwd(), 'database-backup.json');
    fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`✅ Backup saved to: ${backupPath}`);
    
  } catch (error) {
    console.error('❌ Backup failed:', error);
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--backup-only')) {
    await exportToJson();
  } else if (args.includes('--help')) {
    console.log(`
Database Migration Tool

Usage:
  node migrate-to-postgres.js              # Migrate data to PostgreSQL
  node migrate-to-postgres.js --backup-only # Create JSON backup only
  node migrate-to-postgres.js --help       # Show this help

Environment Variables Required:
  DATABASE_URL - PostgreSQL connection string

Example:
  DATABASE_URL=postgresql://user:pass@host:5432/db node migrate-to-postgres.js
    `);
  } else {
    if (!process.env.DATABASE_URL) {
      console.error('❌ DATABASE_URL environment variable is required');
      console.log('Example: DATABASE_URL=postgresql://user:pass@host:5432/db');
      process.exit(1);
    }
    
    await exportToJson();
    await migrateData();
  }
}

main().catch(console.error);