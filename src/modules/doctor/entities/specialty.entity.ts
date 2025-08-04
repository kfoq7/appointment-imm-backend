import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm'
import { Doctor } from './doctor.entity'

@Entity()
export class Specialty {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100, unique: true })
  name: string

  @Column({ nullable: true })
  description?: string

  @Column({ default: true })
  isActive: boolean

  @OneToMany('Doctor', 'doctor.specialty')
  doctors: Relation<Doctor[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
