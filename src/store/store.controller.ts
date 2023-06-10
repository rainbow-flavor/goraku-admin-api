import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':id')
  async getStore(@Param('id') storeId: number) {
    return await this.storeService.getStoreDetail(storeId);
  }

  @Get()
  async getStoreList() {
    return await this.storeService.getStoreList();
  }

  @Post('/update')
  async update(@Query('id') storeId: number, @Body() store: UpdateStoreDto) {
    return await this.storeService.updateStore(storeId, store);
  }

  @Post()
  async create(@Body() store: CreateStoreDto) {
    return await this.storeService.createStore(store);
  }
}
