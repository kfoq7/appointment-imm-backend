import { Injectable } from '@nestjs/common'
import { HourRepository } from './repositories/hour.repository'

@Injectable()
export class HourService {
  constructor(private readonly hourRepository: HourRepository) {}

  findAllHours() {
    return this.hourRepository.findAll()
  }

  findHourById(id: number) {
    return this.hourRepository.findById(id)
  }
}
