import { PartialType } from '@nestjs/mapped-types'
import { IsOptional, Matches } from 'class-validator'
import { Status } from '@modules/common/types/enums'
import { CreateRoleDto } from './create-role.dto'

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsOptional()
  @Matches(
    `^${Object.values(Status)
      .filter(v => typeof v !== 'number')
      .join('|')}$`,
    'i',
  )
  status?: Status
}
