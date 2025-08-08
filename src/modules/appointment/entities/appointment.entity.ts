import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Doctor } from '@modules/doctor'
import { Patient } from '@modules/patient'
import { Hour } from '@modules/hour'
import { AppointmentStatus } from './appointment-status.entity'
import { AppointmentProcedure } from './appointment-procedure.entity'

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('increment')
  id: string

  @ManyToOne('Doctor', 'doctor.appointments')
  @JoinColumn()
  doctor: Relation<Doctor>

  @Column({ nullable: true })
  observation: string

  @Column({ type: 'date', nullable: true })
  appointmentDate: Date

  @ManyToOne('Patient', 'patient.appointments')
  @JoinColumn()
  patient: Relation<Patient>

  @ManyToOne('AppointmentStatus', 'appointment.status', { nullable: true })
  @JoinColumn()
  status: Relation<AppointmentStatus>

  @ManyToOne('Hour', 'hour.appointment', { nullable: true })
  @JoinColumn()
  hour: Relation<Hour>

  @OneToMany('AppointmentProcedure', 'appointment.procedures')
  procedures: Relation<AppointmentProcedure[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
