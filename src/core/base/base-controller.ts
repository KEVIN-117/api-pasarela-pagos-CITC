import { AbstractController } from '@/common/dto/abstract-controller.dto';
import { LoggerService } from '@/core/logger';

export class BaseController extends AbstractController {
  protected logger: LoggerService;

  constructor() {
    super();
    this.logger = LoggerService.getInstance();
  }
}
