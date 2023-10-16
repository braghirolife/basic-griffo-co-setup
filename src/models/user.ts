import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: "Customer"})
export class Customer{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    user_key: string

    @Column(
        {
            nullable: false
        }
    )
    username: string

    @Column(
        {
            nullable: false
        }
    )
    user_password: string

    @Column(
        {
            nullable: false
        }
    )
    person_name: string

    // @Column({
    //     type: 'date'
    // })
    // date_of_birth: string
}