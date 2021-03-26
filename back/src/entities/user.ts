import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  sons: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User
