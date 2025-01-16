import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateShippingAddress1736996048022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const orderTable = await queryRunner.getTable('order');
    const columnExists = orderTable.columns.some(
      (col) => col.name === 'shipping_address',
    );

    if (!columnExists) {
      await queryRunner.addColumn(
        'order',
        new TableColumn({
          name: 'shipping_address',
          type: 'varchar',
          isNullable: true,
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('order', 'shipping_address');
  }
}
