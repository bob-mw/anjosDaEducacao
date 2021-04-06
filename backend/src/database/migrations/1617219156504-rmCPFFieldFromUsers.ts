import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class rmCPFFieldFromUsers1617219156504 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'cpf')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'cpf',
      type: 'varchar',
      isUnique: true
    }))
  }
}
