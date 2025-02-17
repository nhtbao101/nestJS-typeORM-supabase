import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateRemoveImage1739764913496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'product',
      new TableColumn({
        name: 'image',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('product', 'image');
  }
}
