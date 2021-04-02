import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  title: string

  @Column({ default: false })
  checked: boolean
}
