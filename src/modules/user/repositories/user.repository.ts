import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find()
  }

  async findById(id: number) {
    return this.userRepository.findOne({ where: { id } })
  }

  async create(user: CreateUserDto) {
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }
}
