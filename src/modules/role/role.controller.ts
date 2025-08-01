import { Controller, Get, Post, Put } from '@nestjs/common'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Controller('api/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAllRoles() {
    return this.roleService.findAllRoles()
  }

  @Get(':id')
  async getRoleById(id: number) {
    return this.roleService.findRoleById(id)
  }

  @Post()
  async createRole(roleData: CreateRoleDto) {
    return this.roleService.createRole(roleData)
  }

  @Put(':id')
  async updateRole(id: number, roleData: UpdateRoleDto) {
    return this.roleService.updateRole(id, roleData)
  }
}
