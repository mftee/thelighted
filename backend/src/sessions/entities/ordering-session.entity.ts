import { QRCode } from "src/qr-codes/entities/qr-code.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ordering_sessions')
export class OrderingSession {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({ unique: true }) sessionId: string;

  @ManyToOne(() => QRCode) qrCode: QRCode;

  @Column() tableNumber: string;
  @Column({ type: 'enum', enum: ['ACTIVE','ORDERING','CHECKED_OUT','EXPIRED'] })
  status: string;

  @Column('jsonb') items: any;
  @Column() startedAt: Date;
  @Column() lastActivityAt: Date;
  @Column() expiresAt: Date;
}
