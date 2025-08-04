import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Permission } from './entities/permission.entity'
import { PermissionRole } from './entities/permission-role.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionRole])],
  providers: [],
  controllers: [],
  exports: [],
})
export class PermissionModule {}
