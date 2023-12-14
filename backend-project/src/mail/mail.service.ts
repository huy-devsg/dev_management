import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dto/create-mail.dto';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from 'src/auth/constants/jwtConstants';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  prisma = new PrismaClient();
  async sendEmail(body: CreateMailDto): Promise<any> {
    const { email } = body;
    try {
      const user = await this.prisma.users.findFirst({
        where: {
          email,
          is_delete: false,
        },
      });
      if (user) {
        const checkIsUpdate = await this.prisma.user_reset_password.findFirst({
          where: {
            user_id: user.user_id,
            is_update: true,
          },
        });

        if (checkIsUpdate) {
          await this.prisma.user_reset_password.update({
            where: {
              user_id: user.user_id,
            },
            data: {
              is_update: false,
            },
          });
        }
        const token = this.jwtService.sign(
          { data: { user_id: user.user_id, email } },
          {
            expiresIn: jwtConstants.expiresIn.resetPass,
            secret: jwtConstants.secret.resetPass,
          },
        );
        const text = `Dear ${email},

        We received a request to reset your password for your account. Please click on the link below to set up a new password:
        
        [http://localhost:8080/reset-password/new?token=${token}]
        
        If you did not request this change, please disregard this email. Your account security is important to us, so we recommend you keep your password confidential and unique for each online service.
        
        Thank you,`;
        const emailOptions = {
          to: email,
          subject: 'Reset Password',
          text,
        };
        await this.mailerService.sendMail(emailOptions);
        return {
          status: 200,
          message: 'Send mail successly!',
        };
      } else {
        return {
          status: 400,
          message: 'Send mail failed!',
        };
      }
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}
