import {Controller, Req, Get, Patch, UseGuards,
} from '@nestjs/common';
import { User } from "../user/user.entity";
import { JwtAuthGuard} from '../auth/guards/auth.guards';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@Req() req: any) {
    return req.user;
  }
}

