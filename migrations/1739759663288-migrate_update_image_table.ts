import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateUpdateImageTable1739759663288
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'image',
      new TableColumn({
        name: 'image_name',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('image', 'image_name');
  }
}
