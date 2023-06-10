import { PartialType } from '@nestjs/mapped-types';
import { Store } from '../entities/store.entity';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateStoreDto extends PartialType(Store) {
  @IsString()
  @IsOptional()
  city1: string;

  @IsString()
  @IsOptional()
  city2: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  uptime: string;

  @IsBoolean()
  @IsOptional()
  isop: boolean;

  @IsString()
  @IsOptional()
  latitude: string;

  @IsString()
  @IsOptional()
  longitude: string;

  @IsString()
  @IsOptional()
  contact: string;

  @IsString()
  @IsOptional()
  twitter: string;

  @IsString()
  @IsOptional()
  website: string;

  @IsBoolean()
  @IsOptional()
  k: boolean;

  @IsBoolean()
  @IsOptional()
  n: boolean;

  @IsBoolean()
  @IsOptional()
  s: boolean;

  @IsBoolean()
  @IsOptional()
  t: boolean;

  @IsBoolean()
  @IsOptional()
  a: boolean;
}
