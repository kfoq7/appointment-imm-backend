import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Doctor } from '../entities/doctor.entity'

@Injectable()
export class DoctorRepository {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  findAll() {
    return this.doctorRepository.find()
  }

  findById(id: number) {
    return this.doctorRepository.findOne({ where: { id } })
  }
}
