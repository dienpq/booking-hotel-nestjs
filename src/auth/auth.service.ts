import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async createToken(payload: object) {
    return {
      expiresIn: process.env.JWT_EXPIRESIN,
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userService.getUser({
      account,
      password,
    });

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    } else {
      throw new BadRequestException('Incorrect account or password');
    }
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userService.getUser({
      account: registerDto.account,
    });

    if (user) {
      throw new BadRequestException('User exist already');
    }
    const newUser = await this.userService.createUser(registerDto);

    const token = await this.createToken({
      username: newUser.username,
      account: newUser.account,
      role: newUser.role,
    });
    return {
      profile: newUser,
      ...token,
    };
  }

  async login(loginDto: LoginDto) {
    const userLogin = await this.validateUser(
      loginDto.account,
      loginDto.password,
    );
    const token = await this.createToken({
      username: userLogin.username,
      account: userLogin.account,
      role: userLogin.role,
    });
    return {
      profile: userLogin._doc,
      ...token,
    };
  }
}
