import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { PermissionRole } from './permission-role.entity'

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string

  @OneToMany('PermissionRole', 'permissionRole.permission')
  permissionRoles: Relation<PermissionRole[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
