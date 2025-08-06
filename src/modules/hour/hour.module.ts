import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Hour } from './entities/hour.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Hour])],
  controllers: [],
  providers: [],
  exports: [],
})
export class HourModule {}
