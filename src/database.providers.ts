import { DataSource } from 'typeorm'
import { CreateCoursesTable1662300745728 } from './migrations/1662300745728-CreateCoursesTable'
import { CreateTagsTable1662301056308 } from './migrations/1662301056308-CreateTagsTable'
import { CreateCoursesTagsTable1662305073825 } from './migrations/1662305073825-CreateCoursesTagsTable'
import { AddCoursesIdToCoursesTagsTable1662305351461 } from './migrations/1662305351461-AddCoursesIdToCoursesTagsTable'
import { AddTagsIdToCoursesTagsTable1662305875064 } from './migrations/1662305875064-AddTagsIdToCoursesTagsTable'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      })

      return dataSource.initialize()
    },
  },
]

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1662300745728,
    CreateTagsTable1662301056308,
    CreateCoursesTagsTable1662305073825,
    AddCoursesIdToCoursesTagsTable1662305351461,
    AddTagsIdToCoursesTagsTable1662305875064
  ],
})
