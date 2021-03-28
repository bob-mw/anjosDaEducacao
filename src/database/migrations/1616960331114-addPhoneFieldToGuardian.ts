import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addPhoneFieldToGuardian1616960331114 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('guardian', new TableColumn({
      name: 'phone',
      type: 'varchar',
      isUnique: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('guardian', 'phone')
  }
}
