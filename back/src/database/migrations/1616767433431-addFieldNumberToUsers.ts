import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addFieldNumberToUsers1616767433431 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'number',
      type: 'integer'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'number')
  }
}
