import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Patient } from '../entities/patient.entity'
import { CreatePatientDto } from '../dto/create-patient.dto'
import { UpdatePatientDto } from '../dto/update-patient.dto'

@Injectable()
export class PatientRepository {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient = this.patientRepository.create(createPatientDto)
    return await this.patientRepository.save(patient)
  }

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find()
  }

  async findById(id: number): Promise<Patient | null> {
    return await this.patientRepository.findOne({
      where: { id },
      relations: {
        socialMedia: true,
      },
    })
  }

  async findByEmail(email: string): Promise<Patient | null> {
    return await this.patientRepository.findOne({ where: { email } })
  }

  async update(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient | null> {
    await this.patientRepository.update(id, updatePatientDto)
    return await this.findById(id)
  }
}
