import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city1: string;

  @Column()
  city2: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  uptime: string;

  @Column()
  isop: boolean;

  @Column({ nullable: true })
  latitude: string;
  @Column({ nullable: true })
  longitude: string;

  @Column({ nullable: true })
  contact: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  k: boolean;

  @Column({ nullable: true })
  n: boolean;

  @Column({ nullable: true })
  s: boolean;

  @Column({ nullable: true })
  t: boolean;

  @Column({ nullable: true })
  a: boolean;
}
