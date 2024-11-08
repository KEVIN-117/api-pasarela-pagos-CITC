import {
  ArrayMaxSize,
  ArrayNotEmpty,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CrearDetalleProductosDto } from './crear-detalle-productos.dto';
import { Type } from 'class-transformer';

export class CrearPagoDto {
  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  nroDocumento: string;

  @IsNotEmpty()
  @IsString()
  fechaNacimiento: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsNumber()
  montoTotal: number;

  @IsNotEmpty()
  @ArrayNotEmpty()
  @ArrayMaxSize(500)
  @ValidateNested({ each: true })
  @Type(() => CrearDetalleProductosDto)
  productos: CrearDetalleProductosDto;
}
