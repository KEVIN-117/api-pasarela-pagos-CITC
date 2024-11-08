import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

import {
  IsArray,
  ValidateNested,
  IsOptional,
  IsEmail,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CrearDetalleProductosDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  codigoProducto: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  precioUnitario: number;
}

/**
 * \
 */

export class DatosSesionDto {
  @IsString()
  @IsNotEmpty()
  idToken: string;
}

export class DatosPagoDto {
  @IsString()
  @IsNotEmpty()
  nombresCliente: string;

  @IsString()
  @IsNotEmpty()
  apellidosCliente: string;

  @IsInt()
  tipoDocumentoCliente: number;

  @IsString()
  @IsNotEmpty()
  numeroDocumentoCliente: string;

  @IsDateString()
  fechaNacimientoCliente: string;

  @IsString()
  @IsNotEmpty()
  cuentaBancaria: string;

  @IsNumber()
  montoTotal: number;

  @IsString()
  @IsNotEmpty()
  moneda: string;

  @IsNumber()
  tipoCambioMoneda: number;

  @IsEmail()
  correo: string;
}

export class ProductoDto {
  @IsString()
  @IsNotEmpty()
  actividadEconomica: string;

  @IsString()
  @IsNotEmpty()
  codigoSin: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  precioUnitario: number;

  @IsInt()
  unidadMedida: number;

  @IsNumber()
  montoDescuento: number;

  @IsInt()
  cantidad: number;
}

export class FacturacionDto {
  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  departamento: string;

  @IsString()
  @IsNotEmpty()
  telefono: string;

  @IsString()
  @IsNotEmpty()
  razonSocial: string;

  @IsInt()
  tipoDocumentoIdentidad: number;

  @IsString()
  @IsNotEmpty()
  documentoIdentidad: string;

  @IsOptional()
  @IsString()
  complemento?: string;

  @IsNumber()
  montoTotal: number;

  @IsOptional()
  @IsNumber()
  montoDescuentoAdicional?: number;

  @IsOptional()
  @IsNumber()
  montoGiftcard?: number;

  @IsNumber()
  tipoCambio: number;

  @IsInt()
  documentoSector: number;
}

export class TransactionDto {
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DatosSesionDto)
  datosSesion: DatosSesionDto[];

  @IsString()
  @IsNotEmpty()
  metaDatosTransaccion: string;

  @IsString()
  @IsNotEmpty()
  codigoOrden: string;

  @ValidateNested()
  @Type(() => DatosPagoDto)
  datosPago: DatosPagoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoDto)
  productos: ProductoDto[];

  @ValidateNested()
  @Type(() => FacturacionDto)
  facturacion: FacturacionDto;
}
