import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('User')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/addUser')
  addUser(@Body() body: CreateUserDto) {
    return this.usersService.addUser(body);
  }

  @Post('/getListUser')
  getAllUser() {
    return this.usersService.getAllUser();
  }
  @Get('/getUserById/:userId')
  getUserById(@Param('userId') userId: number) {
    return this.usersService.getUserById(+userId);
  }
  @Patch('/updateUser/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(+id, body);
  }
  @Patch('/reset-password')
  updatePassword(@Body() body: any) {
    return this.usersService.updatePassword(body);
  }
  @Delete('/deleteUser/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
