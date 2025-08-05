import { Module } from '@nestjs/common'
import { typeOrmModule } from '@config/database.config'
import { envConfig } from '@config/env.config'

import { UserModule } from '@modules/user/user.module'
import { RoleModule } from '@modules/role/role.module'
import { DoctorModule } from '@modules/doctor/doctor.module'
import { PatientModule } from '@modules/patient/patient.module'
import { AppointmentModule } from '@modules/appointment/appointment.module'
import { PermissionModule } from '@modules/permission/permission.module'
import { AuditModule } from '@modules/audit/aduit.module'

@Module({
  imports: [
    envConfig(),
    typeOrmModule(),
    AuditModule,
    UserModule,
    RoleModule,
    DoctorModule,
    PatientModule,
    AppointmentModule,
    PermissionModule,
  ],
})
export class AppModule {}
