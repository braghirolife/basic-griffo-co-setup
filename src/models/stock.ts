import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
  } from 'typeorm';
  
  @Entity({name: 'Stock'})
  export class Stock {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 6, unique: true, nullable: false })
    ticker: string;
  
    @Column('decimal', { precision: 20, scale: 2, nullable: false })
    current_price: number;
  }