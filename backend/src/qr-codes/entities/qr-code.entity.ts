import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('qr_codes')
export class QRCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  restaurantId: string;

  @Column({ unique: true })
  code: string;

  @Column()
  location: string;

  @Column()
  qrImageUrl: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  scanCount: number;

  @Column({ nullable: true })
  lastScannedAt: Date;

  @Column({ type: 'jsonb' })
  designOptions: any;

  @Column({ nullable: true })
  promotionCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
