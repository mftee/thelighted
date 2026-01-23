import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  async upload(path: string, buffer: Buffer): Promise<string> {
    return `https://cdn.thelighted.com/${path}`;
  }
}
