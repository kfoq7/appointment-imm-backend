import { Injectable } from '@nestjs/common'
import { RoleRepository } from './repositories/role.repository'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  findAllRoles() {
    return this.roleRepository.findAll()
  }

  findRoleById(id: number) {
    return this.roleRepository.findById(id)
  }

  createRole(role: CreateRoleDto) {
    return this.roleRepository.create(role)
  }

  updateRole(id: number, roleData: UpdateRoleDto) {
    return this.roleRepository.update(id, roleData)
  }
}
