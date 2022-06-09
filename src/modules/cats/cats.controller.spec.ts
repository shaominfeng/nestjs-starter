import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import {Model} from "mongoose";
import {CatDocument} from "./schemas/cat.schema";

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;
  let catModel: Model<CatDocument>
  beforeEach(() => {
    catsService = new CatsService(catModel);
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [{name:'tom',age:2,breed:'cat'}];
      jest.spyOn(catsService, 'findAll').mockImplementation(async() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});