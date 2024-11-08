import { COLOR } from '../constants';
import { LoggerService } from '../classes';
import { stdoutWrite } from '../tools';
import { AppInfo } from '../types';
import { getIPAddress } from '../utilities';

export function printInfo(appInfo: AppInfo) {
  const logger = LoggerService.getInstance();

  const nodeEnv = appInfo.env;
  const port = appInfo.port;
  const appLocalUrl = `http://localhost:${port}`;
  const appNetworkUrl = `http://${getIPAddress()}:${port}`;
  const pid = process.pid;

  logger.auditInfo('application', {
    mensaje: 'Servicio desplegado',
    metadata: {
      entorno: nodeEnv,
      urlLocal: appLocalUrl,
      urlRed: appNetworkUrl,
    },
    consoleOptions: {
      disabled: false,
      propsToHide: ['app', 'version', 'entorno', 'urlLocal', 'urlRed'],
    },
  });

  const serviceInfo = `
 ${COLOR.LIGHT_GREY}-${COLOR.RESET} Proceso     : ${COLOR.GREEN}${pid}
 ${COLOR.LIGHT_GREY}-${COLOR.RESET} Servicio    : ${COLOR.GREEN}Activo
 ${COLOR.LIGHT_GREY}-${COLOR.RESET} Entorno     : ${COLOR.GREEN}${nodeEnv}
 ${COLOR.LIGHT_GREY}-${COLOR.RESET} URL (local) : ${COLOR.GREEN}${appLocalUrl}
 ${COLOR.LIGHT_GREY}-${COLOR.RESET} URL (red)   : ${COLOR.GREEN}${appNetworkUrl}
  `;
  stdoutWrite(serviceInfo);
  stdoutWrite(`${COLOR.RESET}\n`);
}
