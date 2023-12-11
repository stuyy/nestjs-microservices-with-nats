import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private paymentsService: PaymentsService,
  ) {}
  @EventPattern('createPayment')
  async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
    const newPayment =
      await this.paymentsService.createPayment(createPaymentDto);
    if (newPayment) this.natsClient.emit('paymentCreated', newPayment);
  }
}
