/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRoomsDto } from './dto';
import { EditRoomsDto } from './dto';
import { RoomsService } from './rooms.service';

@Controller('api/rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  createRooms(@Body() dto: CreateRoomsDto) {
    return this.roomsService.createRooms(dto);
  }

  @Get()
  viewRooms() {
    return this.roomsService.viewRooms();
  }

  @Get(':id')
  viewSingleRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.viewSingleRoom(id);
  }

  @Patch(':id')
  updateRoom(@Param('id', ParseIntPipe) id: number, @Body() dto: EditRoomsDto) {
    return this.roomsService.updateRoom(id, dto);
  }

  @Delete(':id')
  deleteRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomsService.deleteRoom(id);
  }
}
