import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateOrderItem1737713392561 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'order_item',
      new TableColumn({
        name: 'subtotal',
        type: 'int4',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('order_item', 'subtotal');
  }
}
