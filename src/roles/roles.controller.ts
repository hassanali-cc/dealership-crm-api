import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Ip } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Prisma } from '@prisma/client';
import { SkipThrottle } from '@nestjs/throttler'
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@SkipThrottle()
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }
  private readonly logger = new MyLoggerService(RolesController.name)

  @Post()
  create(@Body() createRoleDto: Prisma.RoleCreateInput) {
    return this.rolesService.create(createRoleDto);
  }

  @SkipThrottle({ default: false })
  @Get()
  findAll(@Ip() ip: string) {
    this.logger.log(`Request for ALL Employees\t${ip}`, RolesController.name)
    return this.rolesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: Prisma.RoleCreateInput) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
