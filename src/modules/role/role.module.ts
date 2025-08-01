import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from './entities/role.entity'
import { RoleService } from './role.service'
import { RoleRepository } from './repositories/role.repository'
import { RoleController } from './role.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService, RoleRepository],
  controllers: [RoleController],
  exports: [RoleService, RoleRepository],
})
export class RoleModule {}
