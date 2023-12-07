import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  email: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  language: any;

  @ApiProperty()
  desc: string;
}
