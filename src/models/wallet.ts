import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import { Customer } from './user';


@Entity({name: "Wallet"})
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, nullable: false })
    user_key: string;
  
    @OneToOne(() => Customer, (customer: Customer) => customer.wallet)
    @JoinColumn({ name: 'user_key', referencedColumnName: 'user_key' })
    customer: Customer;
    
  }