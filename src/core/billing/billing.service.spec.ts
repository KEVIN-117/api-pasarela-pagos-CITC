import { Test, TestingModule } from '@nestjs/testing';
import { FacturacionService } from './billing.service';

describe('FacturacionService', () => {
  let service: FacturacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacturacionService],
    }).compile();

    service = module.get<FacturacionService>(FacturacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
