import { Module } from '@nestjs/common';
import { KeycloakConnectModule, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';
import { KeycloakController } from './keycloak.controller';
import { KeycloakService } from './keycloak.service';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'master',
      clientId: 'my-nestjs-app',
      secret: 'secret',
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    })
  ],
  controllers: [KeycloakController],
  providers:   [KeycloakService],
})
export class KeycloakModule{}