import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class addFieldStreetToUser1616735277835 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'street',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'street')
  }
}
