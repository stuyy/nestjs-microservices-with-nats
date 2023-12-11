import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  getUserById(userId: string) {
    return this.usersRepository.findOne({
      where: { id: userId },
      relations: ['payments'],
    });
  }
}
