import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class createStore1617075734268 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'store',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'cnpj',
          type: 'varchar'
        },
        {
          name: 'phone',
          type: 'varchar'
        },
        {
          name: 'created_at',
          type: 'timestamp with time zone',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp with time zone',
          default: 'now()'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('store')
  }
}
