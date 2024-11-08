import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CrearDetalleProductosDto } from './crear-detalle-productos.dto';
import { TipoDocumentoIdentidad } from '@/common/constans';

export class CrearFacturaDto {
  @IsNotEmpty()
  @IsNumber()
  @IsEnum(TipoDocumentoIdentidad)
  tipoDocumentoIdentidad: number;

  @IsNotEmpty()
  @IsString()
  numeroDocumento: string;
  @IsNotEmpty()
  @IsString()
  razonSocial: string;
  @IsNotEmpty()
  @IsEmail()
  correo: string;
  @IsNotEmpty()
  @IsNumber()
  montoTotal: number;
  @IsNotEmpty()
  detalle: CrearDetalleProductosDto[];
}
