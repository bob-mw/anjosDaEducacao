import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addCPFFieldToGuardian1616960047422 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('guardian', new TableColumn({
      name: 'cpf',
      type: 'varchar',
      isUnique: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('guardian', 'cpf')
  }
}
