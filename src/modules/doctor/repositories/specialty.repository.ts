import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Specialty } from '../entities/specialty.entity'

@Injectable()
export class SpecialtyRepository {
  constructor(
    @InjectRepository(Specialty)
    private readonly specialtyRepository: Repository<Specialty>,
  ) {}

  findAll() {
    return this.specialtyRepository.find()
  }

  findById(id: number) {
    return this.specialtyRepository.findOne({ where: { id } })
  }
}
