import { Controller, Post, Query, Get } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { Body } from '@nestjs/common';

@Controller('reset-password')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(@Body() body: CreateMailDto): Promise<any> {
    try {
      await this.mailService.sendEmail(body);
    } catch (error) {
      return `Failed to send email: ${error.message}`;
    }
  }
  @Get()
  getToken(@Query() token: string) {
    return this.mailService.getToken(token);
  }
}
