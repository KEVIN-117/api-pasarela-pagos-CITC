import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BillingService } from './billing.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        baseURL: configService.get('SERVICIO_FACTURACION'),
        headers: {
          authorization: `Bearer ${configService.get('TOKEN_FACTURACION')}`,
        },
      }),
    }),
  ],
  providers: [BillingService],
  exports: [BillingService],
})
export class BillingModule {}
