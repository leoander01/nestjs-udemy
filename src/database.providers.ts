import { DataSource } from 'typeorm'
import { CourseRefactoringTest1661814392785 } from './migrations/1661814392785-CourseRefactoringTest'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true,
      })

      return dataSource.initialize()
    },
  },
]

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
  migrations: [CourseRefactoringTest1661814392785],
})
