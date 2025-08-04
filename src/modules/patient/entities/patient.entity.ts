import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

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

  @Column({ type: 'date', nullable: true })
  birhthDate: Date

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
