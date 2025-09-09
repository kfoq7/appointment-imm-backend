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
import { SocialMedia } from '@modules/social-media'
import { DocumentType } from '@modules/common/types/enums'

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  names: string

  @Column({ length: 100 })
  lastNames: string

  @Column({ length: 15, unique: true, nullable: true })
  email: string

  @Column({ length: 20, unique: true, nullable: true })
  documentNumber: string

  @Column({
    type: 'enum',
    enum: DocumentType,
    default: DocumentType.DNI,
  })
  documentType: DocumentType

  @Column({ type: 'date', nullable: true })
  birhthDate: Date

  @ManyToOne('SocialMedia', 'socialMedia.patients')
  @JoinColumn()
  socialMedia: Relation<SocialMedia>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
