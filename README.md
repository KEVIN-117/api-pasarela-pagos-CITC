# Plugin para la pasarela de pagos 

- paso 1: Instalacion
  
```bash
npm install custom-payment-gateway

```

- Paso 2: Confogurara las variables de entorno

```text
# Datos de despliegue development | test | production
NODE_ENV=development
PORT=3000

# Configuración para los servicios de pagos y facturación predeterminados
SERVICIO_FACTURACION=<>
TOKEN_FACTURACION=<>

SERVICIO_PAGOS=<>
TOKEN_PAGOS=<>
CPT_TOKEN_AUTHORIZATION=<>
CUENTA_BANCARIA_CPT=<>

```