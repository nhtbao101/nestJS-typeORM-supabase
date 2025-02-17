import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MigrateCreateImageTable1739518623356
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'image',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'url',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'product_id',
            type: 'int4',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['product_id'],
            referencedTableName: 'product',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE', // Xóa ảnh khi sản phẩm bị xóa
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('image');
  }
}
