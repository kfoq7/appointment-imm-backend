import { Module } from '@nestjs/common'
import { typeOrmModule } from '@config/database.config'
import { envConfig } from '@config/env.config'

import { UserModule } from '@modules/user/user.module'
import { RoleModule } from '@modules/role/role.module'
import { DoctorModule } from '@modules/doctor/doctor.module'
import { PatientModule } from '@modules/patient/patient.module'
import { AppointmentModule } from '@modules/appointment/appointment.module'

@Module({
  imports: [
    envConfig(),
    typeOrmModule(),
    UserModule,
    RoleModule,
    DoctorModule,
    PatientModule,
    AppointmentModule,
  ],
})
export class AppModule {}
