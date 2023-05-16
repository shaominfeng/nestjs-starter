import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {
    // this.myLogger.setContext('UsersController');
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.logger.log(`request=${JSON.stringify(CreateUserDto)}`);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    this.logger.log(`request findAll`);
    this.logger.log(`request=${JSON.stringify(CreateUserDto)}`);
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
