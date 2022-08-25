import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller'
import { CoursesService } from './courses.service';
import { coursesProviders } from './courses.providers';

@Module({
  imports: [TypeOrmModule.forFeature([coursesProviders.])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
