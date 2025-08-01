import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Status } from '@modules/common/types/enums'
import { Role } from '@modules/role'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 45, nullable: true })
  username: string

  @Column({ length: 100, nullable: true })
  password: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status

  @Column({ length: 100, nullable: true })
  names: string

  @Column({ length: 100, nullable: true })
  lastNames: string

  @Column({ length: 15, nullable: true })
  phone: string

  @ManyToMany('Role', 'role.users')
  @JoinTable()
  roles: Relation<Role[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
