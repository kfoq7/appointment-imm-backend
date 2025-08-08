import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm'
import { AppointmentProcedure } from '@modules/appointment/entities/appointment-procedure.entity'
import { Status } from '@modules/common/types/enums'

@Entity()
export class Procedure {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 200 })
  name: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status

  @OneToMany('AppointmentProcedure', 'procedure.appointments')
  appointments: Relation<AppointmentProcedure[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
