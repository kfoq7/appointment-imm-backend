import { Controller, Get, Param } from '@nestjs/common'
import { DoctorService } from './doctor.service'

@Controller('api/doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  findAll() {
    return this.doctorService.findAllDoctors()
  }

  @Get('specialties')
  findAllSpecialties() {
    return this.doctorService.findAllSpecialties()
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.doctorService.findDoctorById(id)
  }

  @Get('specialties/:id')
  findSpecialtyById(@Param('id') id: number) {
    return this.doctorService.findSpecialtyById(id)
  }
}
