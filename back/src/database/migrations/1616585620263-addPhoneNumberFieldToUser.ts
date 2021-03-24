import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addPhoneNumberFieldToUser1616585620263 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'phone',
      type: 'integer',
      isUnique: true,
      isNullable: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'phone')
  }
}
