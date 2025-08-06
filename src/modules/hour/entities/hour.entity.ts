import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Appointment } from '@modules/appointment'

@Entity()
export class Hour {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 10 })
  hour: string

  @Column({ length: 10 })
  order: number

  @OneToMany('Appointment', 'appointment.hour')
  appointments: Relation<Appointment>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
