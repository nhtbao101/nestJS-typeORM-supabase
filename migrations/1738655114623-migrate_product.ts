import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateProduct1738655114623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('product', [
      new TableColumn({
        name: 'discount',
        type: 'float4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'status',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'sold_count',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'thumbnail',
        type: 'text',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('product', [
      'discount',
      'status',
      'sold_count',
      'thumbnail',
    ]);
  }
}
