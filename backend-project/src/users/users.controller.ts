import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';

@ApiTags('User')
@Controller('api/Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/addUser')
  addUser(@Body() body: CreateUserDto) {
    return this.usersService.addUser(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/getListUser')
  getAllUser(@Request() request) {
    const { role } = request.user;
    if (role !== 'admin') {
      throw new UnauthorizedException();
    }
    return this.usersService.getAllUser();
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/getUserById')
  getUserById(@Request() request) {
    const userId = request.user.user_id;
    return this.usersService.getUserById(+userId);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('/updateUser/:userId')
  updateUser(@Param('userId') userId: number, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(+userId, body);
  }

  @Patch('/ResetPassword')
  updatePassword(@Body() body: any) {
    return this.usersService.updatePassword(body);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/deleteUser/:id')
  removeUser(@Param('id') id: string, @Request() request) {
    const { role } = request.user;
    if (role !== 'admin') {
      throw new UnauthorizedException();
    }
    return this.usersService.removeUser(+id);
  }
}
