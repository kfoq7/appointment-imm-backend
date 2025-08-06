import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // async login(@Body() loginDto: { email: string; password: string }) {
  //   return this.authService.login(loginDto);
  // }

  // @Post('register')
  // async register(@Body() registerDto: { email: string; password: string; name: string }) {
  //   return this.authService.register(registerDto);
  // }

  // @Post('refresh')
  // @HttpCode(HttpStatus.OK)
  // async refresh(@Body() refreshDto: { refreshToken: string }) {
  //   return this.authService.refresh(refreshDto);
  // }
}
