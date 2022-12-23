import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Class } from './Class'

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @ManyToMany(() => Class, (Class) => Class.subjects)
  @JoinTable({
    name: 'classSubject',
    joinColumn: { name: 'classId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'subjectId', referencedColumnName: 'id' },
  })
  classes: Class[]
}
