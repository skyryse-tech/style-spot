import { Controller, Get, Patch, Param, Body, Query } from '@nestjs/common';
import { OwnersService } from './owners.service';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Patch(':id')
  async updateOwner(
    @Param('id') id: string,
    @Body() body: {
      full_name?: string;
      shop_name?: string;
      shop_address?: any;
      service_types?: string[];
      bank_account?: any;
      upi_details?: any;
      holidays?: any;
    },
  ) {
    return this.ownersService.updateOwner(parseInt(id), body);
  }

  @Get('shops')
  async searchShops(
    @Query('lat') lat?: string,
    @Query('lng') lng?: string,
    @Query('service_type') serviceType?: string,
    @Query('q') q?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.ownersService.searchShops({
      lat: lat ? parseFloat(lat) : undefined,
      lng: lng ? parseFloat(lng) : undefined,
      service_type: serviceType,
      q,
      page: page ? parseInt(page) : undefined,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get('shops/:id')
  async getShop(@Param('id') id: string) {
    return this.ownersService.getOwner(parseInt(id));
  }
}
