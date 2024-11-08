import { Injectable } from '@nestjs/common';
import { BaseService } from '@/common/base';
import {
  EstadoNotificacionFactura,
  EstadoNotificacionPago,
  TipoEmisionFactura,
} from '@/common/constans';

@Injectable()
export class NotificationService extends BaseService {
  constructor() {
    super();
  }

  procesarNotificacionPago(notificacionPago: any) {
    console.log(notificacionPago);
    if (
      notificacionPago.finalizado &&
      notificacionPago.estado === EstadoNotificacionPago.PROCESADO
    ) {
      console.log('PAGO REALIZADO CORRECTAMENTE');
    } else {
      console.log('HUBO ERRORES AL REALIZAR PAGO');
    }
    return { procesado: 'Ok' };
  }

  procesarNotificacionFactura(notificacionFactura: any) {
    console.log(notificacionFactura);
    if (
      notificacionFactura.finalizado &&
      notificacionFactura.estado === EstadoNotificacionFactura.EXITO &&
      notificacionFactura.detalle.tipoEmision === TipoEmisionFactura.EMISION
    ) {
      console.log('FACTURA EMITIDA CORRECTAMENTE');
    } else {
      console.log('HUBO ERRORES AL EMITIR FACTURA');
    }
    return { procesado: 'Ok' };
  }
}
