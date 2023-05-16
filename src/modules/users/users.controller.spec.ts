import { Model } from 'mongoose';

import { UserDocument } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userModel: Model<UserDocument>;
  let usersService: UsersService;
  let usersController: UsersController;
  beforeEach(() => {
    usersService = new UsersService(userModel);
    usersController = new UsersController(usersService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [{ name: 'tom', age: 2, Hobby: 'basketBall' }];
      jest.spyOn(usersService, 'findAll').mockImplementation(async () => result);

      expect(await usersController.findAll()).toBe(result);
    });
  });
});
