import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { EstrategiaAdministrador } from './strategies/admin.strategy';
import { AuthenticationComponent, registerAuthenticationStrategy } from '@loopback/authentication';
import { EstrategiaAsesor } from './strategies/asesor.strategy';
import { EstrategiaCliente } from './strategies/cliente.strategy';

export {ApplicationConfig};

export class MascotaFelizApp extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
    // Aquí se agregan las estrategias de los diferentes roles
    registerAuthenticationStrategy(this, EstrategiaAdministrador);
    registerAuthenticationStrategy(this, EstrategiaAsesor);
    registerAuthenticationStrategy(this, EstrategiaCliente);
    //Agregar Otras Estrategias
    this.component(AuthenticationComponent);
  }
}
