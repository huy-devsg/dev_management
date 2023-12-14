import { Controller, Post, Query, Get, UseGuards } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/authGuard';
@ApiTags('Send Mail Reset')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reset-password')
@ApiTags('Reset Password')
@Controller('api/ResetPassword')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(@Body() body: CreateMailDto): Promise<any> {
    return await this.mailService.sendEmail(body);
  }
}
