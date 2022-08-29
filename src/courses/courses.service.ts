import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { CreateCourseDto } from './dto/create-course.dto'
import { UpdateCourseDto } from './dto/update-course.dto'
import { Course } from './entities/course.entity'
import { Tag } from './entities/tag.entity'

@Injectable()
export class CoursesService {
  constructor(
    @Inject('COURSES_REPOSITORY')
    private readonly courseRepository: Repository<Course>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAllCourses() {
    return this.courseRepository.find({
      relations: ['tags']
    })
  }

  async findOneCourse(id: number) {
    const findCourse = await this.courseRepository.findOne({
      where: { id },
      relations: ['tags'],
    })
    if (!findCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return findCourse
  }

  async createCourse(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map(name => this.preloadTagByName(name))
    )

    const createCourse = this.courseRepository.create({
      ...createCourseDto,
      tags,
    })
    return this.courseRepository.save(createCourse)
  }

  async updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    const tags = updateCourseDto.tags &&
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preloadTagByName(name)),
      ))

    const indexCourse = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
      tags,
    })
    if (!indexCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return this.courseRepository.save(indexCourse)
  }

  async removeCourse(id: number) {
    const indexCourse = await this.courseRepository.findOne({
      where: { id },
    })
    if (!indexCourse) {
      throw new NotFoundException(`Course ID ${id} not found!`)
    }
    return this.courseRepository.remove(indexCourse)
  }

  private async preloadTagByName(name: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({ where: { name } });
    if (tag) return tag

    return this.tagRepository.create({ name })
  }
}
