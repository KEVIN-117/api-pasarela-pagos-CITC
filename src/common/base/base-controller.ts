import { LoggerService } from '@/core/logger';
import { AbstractController } from '../dto/abstract-controller.dto';

export class BaseController extends AbstractController {
  protected logger: LoggerService;

  constructor() {
    super();
    this.logger = LoggerService.getInstance();
  }
}
