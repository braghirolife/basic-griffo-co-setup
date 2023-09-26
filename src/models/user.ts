import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "userr"})
export class Userr{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 200,
        nullable: false
    })
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

    // @Column()
    // document_number: string
}