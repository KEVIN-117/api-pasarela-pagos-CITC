import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { BaseController } from '@/common/base';

@Controller('notification')
export class NotificationController extends BaseController {
  constructor(private readonly notificacionService: NotificationService) {
    super();
  }

  @Post('pago/:codigoSeguimiento')
  async procesarNotificacionPago(@Body() datosNotificacionPago: any) {
    const respuesta = await this.notificacionService.procesarNotificacionPago(
      datosNotificacionPago,
    );
    return this.success(respuesta);
  }

  @Post('factura/:codigoSeguimiento')
  async notificacionFactura(@Body() datosNotificacionFactura: any) {
    const respuesta =
      await this.notificacionService.procesarNotificacionFactura(
        datosNotificacionFactura,
      );
    return this.success(respuesta);
    return {};
  }
}
