import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createRoleDto: Prisma.RoleCreateInput) {
    return this.databaseService.role.create({
      data: createRoleDto
    })
  }

  async findAll() {
    return this.databaseService.role.findMany()
  }

  async update(id: number, updateRoleDto: Prisma.RoleCreateInput) {
    return this.databaseService.role.update({
      where: {
        id,
      },
      data: updateRoleDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.role.delete({
      where: {
        id,
      }
    })
  }
}
