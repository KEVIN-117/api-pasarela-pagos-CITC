export class SefeDetalleProductosDto {
  actividadEconomica?: string; // Código de la actividad económica segun catalogo de Impuestos
  codigoSin?: string; //Código del producton en el sistema de Impuestos
  codigo: string;
  descripcion: string;
  precioUnitario: number;
  unidadMedida: number;
  cantidad: number;
}
