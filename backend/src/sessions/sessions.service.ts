import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class SessionsService {
  async create(qrCodeId: string, tableNumber: string) {
    return {
      sessionId: randomUUID(),
      qrCodeId,
      tableNumber,
      status: 'ACTIVE',
      items: [],
      startedAt: new Date(),
    };
  }
}
