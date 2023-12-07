import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class signupDTO {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  @IsNotEmpty()
  avatar: string;

  @ApiProperty()
  @IsNotEmpty()
  gender: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  desc: string;
}
