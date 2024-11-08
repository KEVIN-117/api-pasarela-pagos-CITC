import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
// import { PaymentsModule } from '@/core/payments/payments.module';

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
