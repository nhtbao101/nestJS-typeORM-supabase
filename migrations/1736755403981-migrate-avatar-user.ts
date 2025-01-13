import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrateAvatarUser1736755403981 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user');
    const columnExists = table.columns.some((col) => col.name === 'avatar');

    if (!columnExists) {
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
    await queryRunner.dropColumn('user', 'avatar');
  }
}
