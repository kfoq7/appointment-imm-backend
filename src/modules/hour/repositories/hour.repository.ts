import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Hour } from '../entities/hour.entity'

@Injectable()
export class HourRepository {
  constructor(
    @InjectRepository(Hour)
    private readonly hourRepository: Repository<Hour>,
  ) {}

  findAll() {
    return this.hourRepository.find()
  }

  findById(id: number) {
    return this.hourRepository.findOne({ where: { id } })
  }
}
