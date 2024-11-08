import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from '@/app/sales/sales.module';

@Module({
  imports: [SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
