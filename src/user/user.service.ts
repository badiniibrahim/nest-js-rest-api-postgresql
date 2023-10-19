import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/CreateUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async findOneWithUserName(userName: string) {
    return await this.userRepository.findOne({ where: { email: userName } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    const { ...result } = user;
    return result;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }
}
