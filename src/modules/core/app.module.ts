import { Module } from '@nestjs/common'
import { typeOrmModule } from 'src/config/database.config'
import { envConfig } from 'src/config/env.config'

@Module({
  imports: [envConfig(), typeOrmModule()],
})
export class AppModule {}
