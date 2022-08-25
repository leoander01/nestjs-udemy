import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] =  [{
    id: 1,
    name: 'Framework Nestjs',
    description: 'Framework Nestjs',
    tags: ['nodejs', 'nestjs']
  }]

  findAllCourses() {
    return this.courses
  }

  findOneCourse(id: string) {
    const findCourse = this.courses.find(course => course.id === Number(id))
    if (!findCourse) {
      throw new HttpException(`Course ID ${id} not found!`, HttpStatus.NOT_FOUND)
    }
    return findCourse
  }

  createCourse(createCourseDto: any) {
    this.courses.push(createCourseDto)
    return createCourseDto
  }

  updateCourse(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(course => course.id === Number(id))
    if (!indexCourse) {
      throw new HttpException(`Course ID ${id} not found!`, HttpStatus.NOT_FOUND)
    }
    this.courses[indexCourse] = updateCourseDto
  }

  removeCourse(id: string) {
    const indexCourse = this.courses.findIndex(course  => course.id === Number(id))
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1)
    }
  }
}
