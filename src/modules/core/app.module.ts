import { Module } from '@nestjs/common'
import { typeOrmModule } from '@config/database.config'
import { envConfig } from '@config/env.config'

import { UserModule } from '@modules/user/user.module'
import { RoleModule } from '@modules/role/role.module'

@Module({
  imports: [envConfig(), typeOrmModule(), UserModule, RoleModule],
})
export class AppModule {}
