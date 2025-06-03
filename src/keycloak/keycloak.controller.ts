import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { CreateKeycloakDto } from './dto/create-keycloak.dto';
import { UpdateKeycloakDto } from './dto/update-keycloak.dto';

@Controller('keycloak')
export class KeycloakController {
  constructor(private readonly keycloakService: KeycloakService) {}

  @Get()
  callback():void{
    return this.keycloakService.callback();
  }
}
