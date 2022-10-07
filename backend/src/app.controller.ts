import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

export interface UserById {
  id: number;
}

export interface User {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  call(): Observable<any> {
    return this.appService.getUser();
  }
}
