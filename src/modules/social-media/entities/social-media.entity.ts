import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm'
import { Patient } from '@modules/patient'
import { Status } from '@modules/common/types/enums'

@Entity()
export class SocialMedia {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 250 })
  platform: string

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status

  @OneToMany('Patient', 'patient.socialMedia')
  patients: Relation<Patient[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
