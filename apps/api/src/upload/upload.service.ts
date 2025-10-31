import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private prisma: PrismaService) {}

  async saveFileRecord(data: {
    owner_id: number;
    file_path: string;
    mime_type: string;
    meta?: any;
  }) {
    return this.prisma.file.create({
      data: {
        owner_id: data.owner_id,
        file_path: data.file_path,
        mime_type: data.mime_type,
        meta: data.meta || {},
      },
    });
  }

  async getOwnerFiles(ownerId: number) {
    return this.prisma.file.findMany({
      where: { owner_id: ownerId },
      orderBy: { created_at: 'desc' },
    });
  }
}
