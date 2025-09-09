import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SocialMedia } from './entities/social-media.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SocialMedia])],
  controllers: [],
  providers: [],
  exports: [],
})
export class SocialMediaModule {}
