import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export default class addCPFFieldToUsers1616586251627 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('user', new TableColumn({
      name: 'cpf',
      type: 'varchar',
      isUnique: true
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'cpf')
  }
}
