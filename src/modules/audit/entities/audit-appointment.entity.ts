import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { User } from '@modules/user'
import { Appointment } from '@modules/appointment'
import { AuditAction } from '../types/enums'

@Entity()
export class AuditAppointment {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'enum',
    enum: AuditAction,
    default: AuditAction.CREATE,
  })
  action: AuditAction

  @Column({
    type: 'text',
    nullable: true,
  })
  modifiedFields: string

  @ManyToOne('User')
  @JoinColumn()
  user: Relation<User>

  @ManyToOne('Appointment')
  @JoinColumn()
  appointment: Relation<Appointment>

  @CreateDateColumn()
  createdAt: Date
}
