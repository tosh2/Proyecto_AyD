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
  usuarios : Usuario[];

  constructor(public servicioCrearCuenta: SysforumCrearCuentaService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('agregando tema');
      if (this.usuario.nombre != ''
        && this.usuario.usuario != ''
          && this.usuario.clave != '') {


              var valor = this.servicioCrearCuenta.getExists(this.usuario.usuario);

              if(valor){

                  this.usuario.usuario = '';

              }else{

                this.servicioCrearCuenta.crearUsuario(this.usuario);
                this.usuario.nombre = '';
                this.usuario.usuario = '';
                this.usuario.clave = '';
                return true;
              }



        return true;
      }
      return false;
  }


}
