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
import { Appointment } from './appointment.entity'
import { Procedure } from '@modules/procedures'

@Entity()
export class AppointmentProcedure {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  paymentStatus: number

  @ManyToOne('Appointment', 'appointment.procedures')
  @JoinColumn()
  appointment: Relation<Appointment>

  @ManyToOne('Procedure', 'procedure.appointments')
  @JoinColumn()
  procedure: Relation<Procedure>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
