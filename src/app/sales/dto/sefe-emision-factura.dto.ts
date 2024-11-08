import { SefeDetalleProductosDto } from './sefe-detalle-producto.dto';

export class SefeEmisionFacturaDto {
  codigoOrden: string;
  correo: string;
  telefono: string;
  municipio: string;
  departamento: string;
  metodoPago: number;
  montoTotal: number;
  puntoVenta: number;
  codigoSucursal: number;
  tipoCambio: number;
  razonSocial: string;
  codigoMoneda: number;
  codigoCliente: string;
  formatoFactura: string;
  documentoSector: number;
  documentoIdentidad: string;
  tipoDocumentoIdentidad: number;
  codigoExcepcion: number;
  detalle: SefeDetalleProductosDto[];
}
