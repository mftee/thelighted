import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QRCode } from './entities/qr-code.entity';
import { QRScan } from './entities/qr-scan.entity';
import { QRCodeDesign } from './entities/qr-code-design.entity';
import { QRCodesController } from './qr-codes.controller';
import { QRCodesService } from './qr-codes.service';
import { StorageService } from 'common/storage/storage.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([QRCode, QRScan, QRCodeDesign]),
  ],
  controllers: [QRCodesController],
  providers: [QRCodesService, StorageService],
  exports: [QRCodesService],
})
export class QRCodesModule {}
