import { Injectable } from '@nestjs/common';
import { Store } from '../entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from '../dto/create-store.dto';
import { UpdateStoreDto } from '../dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeRepository: Repository<Store>,
  ) {}

  async getStoreDetail(storeId: number) {
    return await this.storeRepository.findOneBy({
      id: storeId,
    });
  }

  async getStoreList() {
    return await this.storeRepository.find();
  }

  async createStore(store: CreateStoreDto) {
    return await this.storeRepository.save(store);
  }

  async updateStore(storeId: number, store: UpdateStoreDto) {
    return await this.storeRepository.update(storeId, store);
  }
}
