import { Controller, Post, Body } from '@nestjs/common';
import { CrearFacturaDto } from './dto/crear-factura.dto';
import { SalesService } from './sales.service';
import { BaseController } from '@/common/base';
import { TransactionDto } from './dto/crear-detalle-productos.dto';

@Controller('sales')
export class SalesController extends BaseController {
  constructor(private readonly salesService: SalesService) {
    super();
  }

  @Post('pagar')
  async procesarPago(@Body() datosPago: TransactionDto) {
    const respuesta = await this.salesService.enviarPeticionPago(datosPago);
    return this.successCreate(respuesta);
  }

  @Post('facturar')
  async procesarFctura(@Body() datosFactura: CrearFacturaDto) {
    const respuesta =
      await this.salesService.enviarEmisionFactura(datosFactura);
    return this.successCreate(respuesta);
  }
}
