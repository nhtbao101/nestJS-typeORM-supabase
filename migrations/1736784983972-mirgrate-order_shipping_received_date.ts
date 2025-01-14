import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MirgrateOrderShippingReceivedDate1736784983972
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const orderTable = await queryRunner.getTable('order');
    const columnExists = orderTable.columns.some(
      (col) => col.name === 'shipping_received_date',
    );

    if (!columnExists) {
      await queryRunner.addColumn(
        'order',
        new TableColumn({
          name: 'shipping_received_date',
          type: 'timestamptz',
          isNullable: true,
        }),
      );
    }

    const userTable = await queryRunner.getTable('user');
    const userColumnExists = userTable.columns.some(
      (col) => col.name === 'shipping_received_date',
    );
    if (!userColumnExists) {
      await queryRunner.addColumn(
        'user',
        new TableColumn({
          name: 'avatar',
          type: 'varchar',
          length: '255',
          isNullable: true,
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('order', 'shipping_received_date');
    await queryRunner.dropColumn('user', 'avatar');
  }
}
