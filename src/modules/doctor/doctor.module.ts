import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DoctorController } from './doctor.controller'
import { DoctorService } from './doctor.service'
import { Doctor } from './entities/doctor.entity'
import { Specialty } from './entities/specialty.entity'
import { DoctorRepository } from './repositories/doctor.repository'
import { SpecialtyRepository } from './repositories/specialty.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Specialty])],
  providers: [DoctorService, DoctorRepository, SpecialtyRepository],
  controllers: [DoctorController],
  exports: [DoctorService],
})
export class DoctorModule {}
