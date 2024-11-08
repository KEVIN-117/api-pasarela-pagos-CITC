import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { BillingService } from '@/core/billing/billing.service';
import { SefeDetalleProductosDto } from './dto/sefe-detalle-producto.dto';
import { SefeEmisionFacturaDto } from './dto/sefe-emision-factura.dto';
import {
  TipoMetodoPago,
  TipoMonedaFactura,
  TipoUnidadMedida,
} from '@/common/constans';
import { TransactionDto } from './dto/crear-detalle-productos.dto';
import { ExternalServiceException } from '@/common/exceptions';

@Injectable()
export class SalesService {
  private readonly billingService: BillingService;

  async enviarPeticionPago(data: TransactionDto) {
    try {
      const respuestaPagos = await this.enviarPeticion(data);

      if (!respuestaPagos.finalizado) {
        throw new Error('No se pudo enviar la petición de pago a PPE');
      }
      await this.guardarRespuestaPeticionPago(respuestaPagos);
      return {
        urlCheckout: respuestaPagos.datos.urlRedireccion,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async guardarRespuestaPeticionPago(respuesta: any) {
    return respuesta;
  }

  async enviarEmisionFactura(datosFactura: any) {
    try {
      const facturaSefe = new SefeEmisionFacturaDto();
      facturaSefe.codigoOrden = uuidv4();
      facturaSefe.correo = datosFactura.correo;
      facturaSefe.telefono = '78787878';
      facturaSefe.municipio = 'LA PAZ';
      facturaSefe.departamento = 'LA PAZ';
      facturaSefe.metodoPago = TipoMetodoPago.EFECTIVO;
      facturaSefe.montoTotal = datosFactura.montoTotal;
      facturaSefe.puntoVenta = 0;
      facturaSefe.codigoSucursal = 0;
      facturaSefe.tipoCambio = 1;
      facturaSefe.razonSocial = datosFactura.razonSocial;
      facturaSefe.codigoMoneda = TipoMonedaFactura.BOLIVIANO;
      facturaSefe.codigoCliente = `cli-${datosFactura.numeroDocumento}`;
      facturaSefe.formatoFactura = 'pagina'; // rollo
      facturaSefe.documentoSector = 1; //factura de compra venta
      facturaSefe.documentoIdentidad = datosFactura.numeroDocumento;
      facturaSefe.tipoDocumentoIdentidad = datosFactura.tipoDocumentoIdentidad;

      const detalleProductos: SefeDetalleProductosDto[] = [];
      datosFactura.detalle.forEach((item) => {
        const producto: SefeDetalleProductosDto = {
          actividadEconomica: '841121', //recuperar de BD
          codigoSin: '91111', // recuperar de BD
          codigo: item.codigo,
          descripcion: item.descripcion,
          precioUnitario: item.precioUnitario, // recupera de base de datos
          unidadMedida: TipoUnidadMedida.UNIDAD_BIENES, //recuperar de base de datos
          cantidad: item.cantidad,
        };
        detalleProductos.push(producto);
      });

      facturaSefe.detalle = detalleProductos;

      const respuestaSefe =
        await this.billingService.enviarEmisionFactura(facturaSefe);
      if (!respuestaSefe.finalizado)
        throw new Error('No se pudo procesar factura');
      const respuesta = await this.guardarRespuestaFacturacion(respuestaSefe);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  }

  async guardarRespuestaFacturacion(respuesta: any) {
    // aqui guardar el codigoSeguimieto de la respuesta
    return { respuesta };
  }

  async enviarPeticion(datosPago: TransactionDto) {
    try {
      const respuesta = await fetch(
        `${process.env.SERVICIO_PAGOS}/transaccion/deuda`,
        {
          method: 'POST',
          body: JSON.stringify(datosPago),
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${process.env.TOKEN_PAGOS}`,
            'x-cpt-authorization': process.env.CPT_TOKEN_AUTHORIZATION,
          },
        },
      );
      const data = await respuesta.json();
      return data;
    } catch (error) {
      throw new ExternalServiceException(
        'PASARELA PAGOS: PETICIÓN',
        error,
        'Ocurrió un error al realizar peticion de pago',
      );
    }
  }
}
