import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateOrder1737444265205 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const orderTable = await queryRunner.getTable('order');
    const columnExists = orderTable.columns.some((col) => col.name === 'note');

    if (!columnExists) {
      await queryRunner.addColumn(
        'order',
        new TableColumn({
          name: 'note',
          type: 'varchar',
          isNullable: true,
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('order', 'note');
  }
}
