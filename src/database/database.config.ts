import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config({ path: '.env' });

export const databaseConfig = {
  type: (process.env.DB_TYPE as any) || 'mysql',
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT) || 3306,
  database: process.env.DB_NAME || 'dv',
  username: process.env.DB_USER || 'name',
  password: process.env.DB_PASSWORD || 'password',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname, '/../migrations/*{.ts,.js}'],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...databaseConfig,
  migrations: ['dist/migrations/*{.ts,.js}'],
});

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => databaseConfig,
);
// export const connectionDatabase = new DataSource(databaseConfig);
