import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from '../entities/role.entity'
import { CreateRoleDto } from '../dto/create-role.dto'
import { UpdateRoleDto } from '../dto/update-role.dto'

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll() {
    return this.roleRepository.find()
  }

  async findById(id: number) {
    return this.roleRepository.findOne({ where: { id } })
  }

  async create(role: CreateRoleDto) {
    const newRole = this.roleRepository.create(role)
    return this.roleRepository.save(newRole)
  }

  async update(id: number, roleData: UpdateRoleDto) {
    await this.roleRepository.update(id, roleData)
    return this.findById(id)
  }
}
