import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { Appointment } from './appointment.entity'
import { DocumentType } from '../types/enums'

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  names: string

  @Column({ length: 100 })
  lastNames: string

  @Column({ length: 15, nullable: true })
  email: string

  @Column({ length: 20, unique: true, nullable: true })
  documentNumber: string

  @Column({
    type: 'enum',
    enum: DocumentType,
    default: DocumentType.DNI,
  })
  documentType: DocumentType

  @OneToMany('Appointment', 'appointment.tutor')
  appointments: Relation<Appointment[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
