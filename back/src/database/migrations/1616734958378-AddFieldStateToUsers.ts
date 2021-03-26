import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class AddFieldStateToUsers1616734958378 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'state',
      type: 'varchar'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'state')
  }
}
