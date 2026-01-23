import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Patch,
  Param,
  Body,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { QRCodesService } from './qr-codes.service';
import { CreateQRCodeDto } from './dto/create-qr-code.dto';
import { UpdateQRCodeDto } from './dto/update-qr-code.dto';

@Controller('api/qr-codes')
export class QRCodesController {
  constructor(private readonly service: QRCodesService) {}

  @Post()
  create(@Body() dto: CreateQRCodeDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateQRCodeDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  @Get(':id/download')
  async download(@Param('id') id: string, @Res() res: Response) {
    const qr = await this.service.findOne(id);
    res.setHeader('Content-Type', 'image/png');
    res.redirect(qr.qrImageUrl);
  }
}
