import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class MicroController {
    private client;
    constructor(client: ClientProxy);
    sum(): Observable<number>;
}
