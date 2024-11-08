import { Module } from '@nestjs/common';
// import { PaymentsService } from './payments.service';
// import { BillingService } from '../billing/billing.service';
import { SalesService } from '@/app/sales/sales.service';

@Module({
  providers: [SalesService],
  exports: [SalesService],
})
export class PaymentsModule {}
