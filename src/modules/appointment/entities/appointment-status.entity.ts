import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Relation,
  OneToMany,
} from 'typeorm'
import { Appointment } from './appointment.entity'

@Entity()
export class AppointmentStatus {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  statusName: string

  @OneToMany('Appointment', 'appointment.status')
  appointments: Relation<Appointment[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
