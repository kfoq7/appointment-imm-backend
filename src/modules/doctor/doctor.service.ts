import { Injectable } from '@nestjs/common'
import { DoctorRepository } from './repositories/doctor.repository'
import { SpecialtyRepository } from './repositories/specialty.repository'

@Injectable()
export class DoctorService {
  constructor(
    private readonly doctorRepository: DoctorRepository,
    private readonly specialtyRepository: SpecialtyRepository,
  ) {}

  findAllDoctors() {
    return this.doctorRepository.findAll()
  }

  findAllSpecialties() {
    // Assuming there's a method in the repository to get specialties
    return this.specialtyRepository.findAll()
  }

  findDoctorById(id: number) {
    return this.doctorRepository.findById(id)
  }

  findSpecialtyById(id: number) {
    return this.specialtyRepository.findById(id)
  }
}
