import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Video } from './Video'

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @OneToMany(() => Video, (Video) => Video.class)
  videos: Video[]
}
