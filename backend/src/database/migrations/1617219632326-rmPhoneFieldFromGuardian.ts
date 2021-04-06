import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class rmPhoneFieldFromGuardian1617219632326 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('guardian', 'phone')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('guardian', new TableColumn({
      name: 'phone',
      type: 'varchar',
      isUnique: true
    }))
  }
}
