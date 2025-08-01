import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAllUsers()
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.findUserById(id)
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user)
  }
}
