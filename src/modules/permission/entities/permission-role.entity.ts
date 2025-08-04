import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Role } from '@modules/role'
import { Permission } from './permission.entity'

@Entity()
export class PermissionRole {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: true })
  show: boolean

  @Column({ default: true })
  create: boolean

  @Column({ default: true })
  update: boolean

  @Column({ default: true })
  remove: boolean

  @Column({ default: true })
  state: boolean

  @ManyToOne('Role', 'role.permissions')
  @JoinColumn()
  role: Relation<Role>

  @ManyToOne('Permission', 'permission.permissionRoles')
  @JoinColumn()
  permission: Relation<Permission>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
