import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Subject } from './Subject'
import { Video } from './Video'

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text', nullable: true })
  description: string

  @OneToMany(() => Video, (Video) => Video.class)
  videos: Video[]

  @ManyToMany(() => Subject, (Subject) => Subject.classes)
  subjects: Class[]
}
