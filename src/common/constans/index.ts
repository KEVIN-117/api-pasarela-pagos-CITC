// swagger config
export const SWAGGER_API_ROOT = 'api/docs';
export const SWAGGER_API_NAME = 'Backend Base';
export const SWAGGER_API_DESCRIPTION =
  'Documentación del Proyecto base BACKEND';
export const SWAGGER_API_CURRENT_VERSION = '1.0';

export enum EstadoNotificacionPago {
  PROCESADO = 'PROCESADO',
  OBSERVADO = 'OBSERVADO',
}

export enum TipoEmisionFactura {
  EMISION = 'EMISION',
  ANULACION = 'ANULACION',
}

export enum EstadoNotificacionFactura {
  EXITO = 'EXITO',
  OBSERVADO = 'OBSERVADO',
}

export enum Status {
  CREATE = 'CREADO',
  ACTIVE = 'ACTIVO',
  INACTIVE = 'INACTIVO',
  PENDING = 'PENDIENTE',
}

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum TipoDocumento {
  CI = 'CI',
  PASAPORTE = 'PASAPORTE',
  CIE = 'CIE',
  OTRO = 'OTRO',
}

export enum TipoDocumentoIdentidad {
  NIT = 5,
  CI = 1,
  CI_EXTRANJERO = 2,
  PASAPORTE = 3,
  OTRO = 4,
}

export enum Genero {
  MASCULINO = 'M',
  FEMENINO = 'F',
  OTRO = 'OTRO',
}

export enum TipoMoneda {
  BOLIVIANOS = 'BOB',
}

export enum Transaccion {
  CREAR = 'CREAR',
  ACTUALIZAR = 'ACTUALIZAR',
}

export const USUARIO_SISTEMA = '1';
export const USUARIO_NORMAL = '0';

export enum TipoUnidadMedida {
  FARDO = 15,
  METRO_CUADRADO = 31,
  METRO_CUBICO = 32,
  PLACAS = 48,
  UNIDAD_BIENES = 57,
  CENTIMETRO_LINEAL = 10,
  CONOS = 13,
  JUEGO = 21,
  LITRO = 28,
  PAQUETE = 42,
  PULGADAS = 50,
  BALDE = 2,
  BOBINAS = 1,
  BOLSA = 4,
  GRUESA = 18,
  MILIGRAMOS = 33,
  MILIMETRO_CUADRADO = 36,
  MILIMETRO_CUBICO = 37,
  YARDA = 60,
  CAJA = 6,
  BARRILES = 3,
  BOTELLAS = 5,
  CENTIMETRO_CUBICO = 9,
  GRAMO = 17,
  KILOGRAMO = 22,
  LATAS = 26,
  PALETAS = 41,
  PIES_CUBICOS = 46,
  TONELADA_LARGA = 54,
  TONELADAS = 55,
  ONZA_TROY = 63,
  CIENTO_DE_UNIDADES = 11,
  KILOVATIO_HORA = 24,
  MEGAWATT_HORA = 29,
  MILILITRO = 34,
  UNIDAD_SERVICIOS = 58,
  OTRO = 62,
  LIBRA_FINA = 64,
  CENTIMETRO_CUADRADO = 8,
  HECTOLITRO = 19,
  METRO = 30,
  MILIMETRO = 35,
  MILLON_DE_UNIDADES = 39,
  PAR = 43,
  TAMBOR = 52,
  TUBOS = 56,
  CARTONES = 7,
  KIT = 25,
  CILINDRO = 12,
  GALON_INGLES = 16,
  HOJA = 20,
  KILOMETRO = 23,
  LIBRAS = 27,
  MILLARES = 38,
  ONZAS = 40,
  PIES_CUADRADOS = 45,
  PIEZAS = 47,
  TONELADA_CORTA = 53,
  PIES = 44,
  PLIEGO = 49,
  RESMA = 51,
  YARDA_CUADRADA = 61,
  DIAS = 67,
  HORAS = 71,
  BIDÓN = 74,
  CAPSULA = 76,
  JERINGA = 81,
  TERMO = 85,
  TUBO = 86,
  BLISTER = 104,
  POMO = 96,
  JABA = 100,
  BANDEJA = 102,
  ESTUCHE = 79,
  BULTO = 66,
  FRASCO = 80,
  SACHET = 83,

  ROLLO = 70,
  AMPOLLA = 73,

  MINI_BOTELLA = 82,

  MESES = 68,
  TURRIL = 103,
  COMPRIMIDO = 78,

  VASO = 97,
  TETRAPACK = 98,
  DISPLAY = 65,
  QUINTAL = 69,
  CARTOLA = 99,
  TIRA = 105,
  AGUJA = 72,
  CARTUCHO = 77,
  TABLETA = 84,

  KILOWATT = 107,
  MEGAWATT = 106,
  AMORTIZACION = 108,
  OVULOS = 109,
  SOBRES = 111,
  SUPOSITORIOS = 110,
  VIAL = 112,
  HECTAREAS = 113,
  ARROBA = 114,
  BARRA = 116,
  PACK = 119,
  AEROSOL = 115,
  CONJUNTO = 117,
  FANEGA = 118,
  POTE = 121,
  PIPETA = 120,
  PASTILLA = 122,

  EQUIPOS = 124,
}

export enum TipoMetodoPago {
  EFECTIVO = 1,
}
export enum TipoMonedaFactura {
  BOLIVIANO = 1,
  DOLAR = 2,
}

export const Messages = {
  SUCCESS_DEFAULT: 'Operación realizada con éxito.',
  SUCCESS_LIST: 'Listado obtenido con éxito.',
  SUCCESS_UPDATE: 'Registro actualizado con éxito.',
  SUCCESS_DELETE: 'Registro eliminado con éxito.',
  SUCCESS_CREATE: 'Registro creado con éxito.',
};
