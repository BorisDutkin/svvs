import { Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../decorators/user.decorator';
import { UserEntity } from '../entities/user.entity';

import { UserService } from '../services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  async whoAmI(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id);
  }
}
