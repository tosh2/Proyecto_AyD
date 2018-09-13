import { Component, OnInit } from '@angular/core';
import { Usuario } from '../sysforum-modelos/model-usuario';

import { SysforumCrearCuentaService } from '../sysforum-services/sysforum-crear-cuenta.service';

@Component({
  selector: 'app-sysforum-crear-cuenta',
  templateUrl: './sysforum-crear-cuenta.component.html',
  styleUrls: ['./sysforum-crear-cuenta.component.css'],
  providers:[SysforumCrearCuentaService]
})
export class SysforumCrearCuentaComponent implements OnInit {

  usuario: Usuario = {
    nombre : '',
    usuario: '',
    clave : ''
  };

  constructor(public servicioCrearCuenta: SysforumCrearCuentaService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('agregando tema');
      if (this.usuario.nombre != '' 
        && this.usuario.usuario != '' 
          && this.usuario.clave != '') {

        this.servicioCrearCuenta.crearUsuario(this.usuario);
        this.usuario.nombre = '';
        this.usuario.usuario = '';
        this.usuario.clave = '';
        return true;
      }
      return false;
  }


}
