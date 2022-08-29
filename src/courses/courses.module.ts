import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module'
import { CoursesController } from './courses.controller'
import { CoursesService } from './courses.service'
import { coursesProviders } from './courses.providers'
import { Tag } from './entities/tag.entity'

@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [CoursesService, ...coursesProviders]
})
export class CoursesModule {}
