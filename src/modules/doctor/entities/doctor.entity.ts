import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm'
import { User } from '@modules/user'
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

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
