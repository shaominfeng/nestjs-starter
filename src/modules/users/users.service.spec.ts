import { Test, TestingModule } from '@nestjs/testing';
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [UsersController],
    //   providers: [UsersService],
    // }).compile();
    // service = await module.resolve(UsersService);
    // service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
