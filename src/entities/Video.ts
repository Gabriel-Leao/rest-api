import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { Class } from './Class'

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @Column({ type: 'text' })
  url: string

  @ManyToOne(() => Class, (Class) => Class.videos)
  @JoinColumn({ name: 'classId' })
  class: Class
}
