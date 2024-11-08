import { SefeEmisionFacturaDto } from '@/app/sales/dto/sefe-emision-factura.dto';
import { ExternalServiceException } from '@/common/exceptions';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BillingService {
  constructor(private httpService: HttpService) {}

  async enviarEmisionFactura(datosFactura: SefeEmisionFacturaDto) {
    try {
      const respuesta = this.httpService
        .post('/facturacion/emision/individual', datosFactura)
        .pipe(map((res) => res.data));
      return await firstValueFrom(respuesta);
    } catch (error) {
      throw new ExternalServiceException(
        'FACTURACION:EMISION',
        error,
        'Ocurrió un error al enviar factura',
      );
    }
  }
}
