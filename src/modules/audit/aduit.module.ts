import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuditAppointment } from './entities/audit-appointment.entity'

@Module({
  imports: [TypeOrmModule.forFeature([AuditAppointment])],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuditModule {}
