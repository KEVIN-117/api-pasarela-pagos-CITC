import { Module } from '@nestjs/common';
// import { MessagingModule } from './messaging/messaging.module';
import { PaymentsModule } from './payments/payments.module';
import { BillingModule } from './billing/billing.module';

@Module({
  imports: [PaymentsModule, BillingModule],
  providers: [],
  exports: [],
})
export class ExternalServicesModule {}
