import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  names: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastNames: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone: string
}
