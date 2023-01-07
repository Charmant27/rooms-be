/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomsDto } from './dto';
import { EditRoomsDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async createRooms(dto: CreateRoomsDto) {
    const rooms = await this.prisma.rooms.create({
      data: {
        ...dto,
      },
    });
    return rooms;
  }

  async viewRooms() {
    const rooms = await this.prisma.rooms.findMany({
      select: {
        id: true,
        name: true,
        location: true,
        date: true,
        price: true,
      },
    });
    return rooms;
  }

  async viewSingleRoom(id: number) {
    const room = await this.prisma.rooms.findUnique({
      where: {
        id: id,
      },
    });
    return room;
  }

  async updateRoom(id: number, dto: EditRoomsDto) {
    const room = await this.prisma.rooms.findUnique({
      where: {
        id: id,
      },
    });
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return this.prisma.rooms.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteRoom(id: number) {
    const room = await this.prisma.rooms.findUnique({
      where: {
        id: id,
      },
    });
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    return this.prisma.rooms.delete({
      where: {
        id: id,
      },
    });
  }
}
