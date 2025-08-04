import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '@modules/user'
import { Appointment } from '@modules/appointment'
import { Specialty } from './specialty.entity'

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne('User', 'user.doctor')
  @JoinColumn()
  user: Relation<User>

  @ManyToOne('Specialty', 'specialty.doctors')
  @JoinColumn()
  specialty: Relation<Specialty>

  @OneToMany('Appointment', 'appointment.doctor')
  appointments: Relation<Appointment>[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
