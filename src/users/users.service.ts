import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) { }

    async create(createUserDto: Prisma.UserCreateInput) {
        return this.databaseService.user.create({
            data: createUserDto
        })
    }

    async findAll(roleId?: number) {
        if (roleId) return this.databaseService.user.findMany({
            where: {
                roleId,
            }
        })
        return this.databaseService.user.findMany()
    }

    async findOne(id: number) {
        return this.databaseService.user.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, updateUserDto: Prisma.UserCreateInput) {
        return this.databaseService.user.update({
            where: {
                id,
            },
            data: updateUserDto,
        })
    }

    async remove(id: number) {
        return this.databaseService.user.delete({
            where: {
                id,
            }
        })
    }
}