import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    document_number: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

    @Column()
    address: string
}