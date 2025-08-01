import { Injectable } from '@nestjs/common'
import { UserRepository } from './repositories/user.repository'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAllUsers() {
    return this.userRepository.findAll()
  }

  async findUserById(id: number) {
    return this.userRepository.findById(id)
  }

  async createUser(user: CreateUserDto) {
    return this.userRepository.create(user)
  }
}
