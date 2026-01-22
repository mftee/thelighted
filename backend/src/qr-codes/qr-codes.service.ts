import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QRCode } from './entities/qr-code.entity';
import { QRScan } from './entities/qr-scan.entity';
import { CreateQRCodeDto } from './dto/create-qr-code.dto';
import { UpdateQRCodeDto } from './dto/update-qr-code.dto';
import { randomUUID } from 'crypto';
import * as QRCodeLib from 'qrcode';
import { StorageService } from 'common/storage/storage.service';

const APP_URL = 'https://thelighted.com';

@Injectable()
export class QRCodesService {
  constructor(
    @InjectRepository(QRCode)
    private readonly qrRepo: Repository<QRCode>,
    @InjectRepository(QRScan)
    private readonly scanRepo: Repository<QRScan>,
    private readonly storage: StorageService,
  ) {}

  async create(dto: CreateQRCodeDto) {
    const code = randomUUID();
    const qrContent = `${APP_URL}/menu/${code}?table=${dto.location}`;

    const buffer = await QRCodeLib.toBuffer(qrContent);

    const url = await this.storage.upload(
      `qr-codes/${dto.restaurantId}/${code}.png`,
      buffer,
    );

    return this.qrRepo.save({
      ...dto,
      code,
      qrImageUrl: url,
    });
  }

  async findOne(id: string) {
    const qr = await this.qrRepo.findOne({ where: { id } });
    if (!qr) throw new NotFoundException();
    return qr;
  }

  async update(id: string, dto: UpdateQRCodeDto) {
    await this.qrRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.qrRepo.delete(id);
  }
}
