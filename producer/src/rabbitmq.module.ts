import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'RABBITMQ_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'notifications',
                    queueOptions: { durable: true },
                },
            },
        ]),
    ],
    exports: [ClientsModule],
}) 
export class RabbitMQModule { }