import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Appointment } from './entities/appointment.entity'
import { AppointmentStatus } from './entities/appointment-status.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, AppointmentStatus])],
  providers: [],
  controllers: [],
  exports: [],
})
export class AppointmentModule {}
