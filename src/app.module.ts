import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthKeyclockMiddleware } from './middleware/auth-keyclock.middleware';
import { AuthModule } from './auth/auth.module';
import { KeycloakModule } from './keycloak/keycloak.module';

@Module({
  imports: [AuthModule, KeycloakModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthKeyclockMiddleware).forRoutes({path: '/', method: RequestMethod.ALL})
  }
}
