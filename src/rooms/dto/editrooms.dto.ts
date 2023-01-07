/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from 'class-validator';
export class EditRoomsDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  price?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  guests?: number;

  @IsInt()
  @IsOptional()
  bedrooms?: number;

  @IsInt()
  @IsOptional()
  beds?: number;

  @IsInt()
  @IsOptional()
  baths?: number;

  @IsString()
  @IsOptional()
  service?: string;

  @IsString()
  @IsOptional()
  details?: string;

  @IsString()
  @IsOptional()
  information?: string;
}
