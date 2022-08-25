import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAllCourses() {
    return this.courseRepository.find()
  }

  findOneCourse(id: string) {
    const findCourse = this.courseRepository.findOne(id)
    if (!findCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return findCourse
  }

  createCourse(createCourseDto: CreateCourseDto) {
    const createCourse = this.courseRepository.create(createCourseDto)
    return this.courseRepository.save(createCourse)
  }

  async updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    const indexCourse = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
    })
    if (!indexCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return this.courseRepository.save(indexCourse)
  }

  async removeCourse(id: string) {
    const indexCourse = await this.courseRepository.findOne(id)
    if (!indexCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return this.courseRepository.remove(indexCourse)
  }
}
