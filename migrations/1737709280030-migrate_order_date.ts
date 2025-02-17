import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateOrderDate1737709280030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'order',
      'order_date',
      new TableColumn({
        name: 'order_date',
        type: 'timestamptz',
        isNullable: false,
        default: 'NOW()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('order', 'note');
  }
}
