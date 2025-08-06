import { Controller, Get, Param } from '@nestjs/common'
import { HourService } from './hour.service'

@Controller('api/hour')
export class HourController {
  constructor(private readonly hourService: HourService) {}

  /**
   * Add pagination.
   */

  @Get()
  findAll() {
    return this.hourService.findAllHours()
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.hourService.findHourById(id)
  }
}
