import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Post()
  async createService(@Body() body: {
    owner_id: number;
    name: string;
    description?: string;
    duration_minutes: number;
    base_price: number;
    gender_type?: string;
    is_home_visit: boolean;
  }) {
    return this.servicesService.createService(body);
  }

  @Patch(':id')
  async updateService(
    @Param('id') id: string,
    @Body() body: {
      name?: string;
      description?: string;
      duration_minutes?: number;
      base_price?: number;
      gender_type?: string;
      is_home_visit?: boolean;
    },
  ) {
    return this.servicesService.updateService(parseInt(id), body);
  }

  @Get(':id')
  async getService(@Param('id') id: string) {
    return this.servicesService.getService(parseInt(id));
  }

  @Get()
  async getServices(@Query('owner_id') ownerId?: string) {
    if (ownerId) {
      return this.servicesService.getOwnerServices(parseInt(ownerId));
    }
    return [];
  }

  @Delete(':id')
  async deleteService(@Param('id') id: string) {
    return this.servicesService.deleteService(parseInt(id));
  }
}
