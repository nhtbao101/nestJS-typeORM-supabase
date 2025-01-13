// import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

// export class MigrateUser1736505034491 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.addColumn(
//       'user',
//       new TableColumn({
//         name: 'avatar',
//         type: 'varchar',
//         length: '255',
//         isNullable: true,
//       }),
//     );
//     await queryRunner.query(
//       `ALTER TABLE "user" ADD COLUMN "avatar" VARCHAR(255) DEFAULT NULL`,
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     return;
//   }
// }
