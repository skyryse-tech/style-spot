import {
  Controller,
  Post,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('owners/:owner_id/upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('owner_id') ownerId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const savedFile = await this.uploadService.saveFileRecord({
      owner_id: parseInt(ownerId),
      file_path: file.path,
      mime_type: file.mimetype,
      meta: {
        originalName: file.originalname,
        size: file.size,
      },
    });

    return savedFile;
  }

  @Get()
  async getFiles(@Param('owner_id') ownerId: string) {
    return this.uploadService.getOwnerFiles(parseInt(ownerId));
  }
}
