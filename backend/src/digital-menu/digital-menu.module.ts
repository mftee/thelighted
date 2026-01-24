import { Module } from '@nestjs/common';
import { DigitalMenuController } from './digital-menu.controller';
import { DigitalMenuService } from './digital-menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QRCode } from '../qr-codes/entities/qr-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QRCode])],
  controllers: [DigitalMenuController],
  providers: [DigitalMenuService],
})
export class DigitalMenuModule {}
