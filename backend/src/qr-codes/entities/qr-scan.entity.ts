import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { QRCode } from './qr-code.entity';

@Entity('qr_scans')
export class QRScan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => QRCode)
  qrCode: QRCode;

  @Column()
  sessionId: string;

  @Column()
  ipAddress: string;

  @Column('text')
  userAgent: string;

  @Column({
    type: 'enum',
    enum: ['MOBILE', 'TABLET', 'DESKTOP'],
  })
  deviceType: string;

  @Column({ type: 'jsonb', nullable: true })
  location: any;

  @CreateDateColumn()
  scannedAt: Date;

  @Column({ default: false })
  convertedToOrder: boolean;

  @Column({ nullable: true })
  orderId: string;
}
