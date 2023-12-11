import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert} from 'typeorm';
import { Wallet } from './wallet';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID generator

@Entity({name: "Customer"})
export class Customer{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'uuid', unique: true, nullable: false })
    user_key: string;

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
    
    // @OneToOne(() => Wallet, (wallet: Wallet) => wallet.customer)
    // @JoinColumn({ name: 'user_key', referencedColumnName: 'user_key' })
    // wallet: Wallet;

    @Column(
        {
            length: 11,
            nullable: false,
            unique: true
        }
    )
    document_number: string

    @BeforeInsert()
    generateUUID() {
        this.user_key = uuidv4(); // Generate a UUID before insertion
    }
    @Column({
        type: 'date'
    })
    date_of_birth: string
}