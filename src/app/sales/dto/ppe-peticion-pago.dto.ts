import { SefeDetalleProductosDto } from './sefe-detalle-producto.dto';

export class PpeDatosPagoDto {
  nombresCliente: string;
  apellidosCliente: string;
  numeroDocumentoCliente: string;
  fechaNacimientoCliente: Date;
  cuentaBancaria: string;
  montoTotal: number;
  moneda: string;
  correo: string;
  tipoCambioMoneda: number;
}

export class PpePeticionPagoDto {
  descripcion: string;
  codigoOrden: string;
  datosPago: PpeDatosPagoDto = new PpeDatosPagoDto();
  productos: SefeDetalleProductosDto[];
}
