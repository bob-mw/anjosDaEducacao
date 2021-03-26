import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addFieldCityToUsers1616735152664 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'city',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'city')
  }
}
