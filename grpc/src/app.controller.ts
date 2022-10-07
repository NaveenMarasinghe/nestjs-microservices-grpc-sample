import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

export interface UserById {
  id: number;
}

export interface User {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  @GrpcMethod('UsersService', 'FindOne')
  findOne(
    data: UserById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): User {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
