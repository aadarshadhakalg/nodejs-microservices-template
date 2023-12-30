import { Test, TestingModule } from '@nestjs/testing';
import { MockDbService } from './db.service';

describe('DbService', () => {
  let service: MockDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockDbService],
    }).compile();

    service = module.get<MockDbService>(MockDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
