/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateRoomsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  guests: number;

  @IsInt()
  @IsNotEmpty()
  bedrooms: number;

  @IsInt()
  @IsNotEmpty()
  beds: number;

  @IsInt()
  @IsNotEmpty()
  baths: number;

  @IsString()
  @IsNotEmpty()
  service: string;

  @IsString()
  @IsNotEmpty()
  details: string;

  @IsString()
  @IsOptional()
  information?: string;
}
