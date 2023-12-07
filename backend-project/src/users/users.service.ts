import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  prisma = new PrismaClient();
  private selectInfoUser = {
    email: true,
    full_name: true,
    avatar: true,
    gender: true,
    role: true,
    desc: true,
    language: true,
  };
  private async handleUser(
    id: number | undefined,
    body: CreateUserDto | UpdateUserDto,
  ) {
    try {
      const { email, full_name, avatar, gender, role, desc, language } = body;

      const data = id
        ? await this.prisma.users.update({
            where: {
              user_id: id,
            },
            data: {
              email,
              full_name,
              avatar,
              gender,
              role,
              desc,
              is_delete: false,
            },
          })
        : await this.prisma.users.create({
            data: {
              email,
              full_name,
              avatar,
              gender,
              role,
              desc,
              is_delete: false,
            },
          });

      if (id) {
        await this.prisma.user_language.deleteMany({
          where: {
            user_id: id,
          },
        });
      }

      const languageCreationPromises = language.map(async (lang) => {
        try {
          const createLang = await this.prisma.user_language.create({
            data: {
              language_id: Number(lang),
              user_id: data.user_id,
            },
          });
          return createLang;
        } catch (error) {
          throw new Error(`Error creating language: ${error}`);
        }
      });

      const createdLanguages = await Promise.all(languageCreationPromises);

      return data;
    } catch {
      throw new Error();
    }
  }
  async getAllUser() {
    try {
      const data = await this.prisma.users.findMany({
        where: {
          is_delete: false,
        },

        include: {
          user_language: {
            include: {
              language: true,
            },
          },
        },
      });
      return data;
    } catch {
      throw new Error();
    }
  }
  async getUserById(userId: number) {
    try {
      const data = await this.prisma.users.findFirst({
        where: {
          user_id: userId,
          is_delete: false,
        },
        include: {
          user_language: {
            include: {
              language: true,
            },
          },
        },
      });

      return data;
    } catch {
      throw new Error();
    }
  }
  async addUser(body: CreateUserDto) {
    try {
      const { email } = body;

      const checkEmail = await this.prisma.users.findMany({
        where: {
          email,
        },
      });

      if (!checkEmail.length) {
        const data = await this.handleUser(undefined, body);
        return data;
      } else {
        throw new Error('Email đã tồn tại');
      }
    } catch {
      throw new Error();
    }
  }

  async updateUser(id: number, body: UpdateUserDto) {
    try {
      const data = await this.handleUser(id, body);
      return data;
    } catch {
      throw new Error();
    }
  }
  async removeUser(id: number) {
    try {
      const data = await this.prisma.users.update({
        where: {
          user_id: id,
        },
        data: {
          is_delete: true,
        },
      });
      return data;
    } catch {
      throw new Error();
    }
  }
}
