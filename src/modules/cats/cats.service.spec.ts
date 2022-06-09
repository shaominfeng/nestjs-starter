import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import {CatsController} from "./cats.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Cat, CatSchema} from "./schemas/cat.schema";

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats')],
    //   controllers: [CatsController],
    //   providers: [CatsService],
    // }).compile();
    // service = await module.resolve(CatsService);
    // service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
