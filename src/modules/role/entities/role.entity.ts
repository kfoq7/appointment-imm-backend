import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '@modules/user'
import { Status } from '@modules/common/types/enums'

@Entity()
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 45, nullable: true })
  name: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status

  @ManyToMany('User', 'user.roles')
  users: Relation<User[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
