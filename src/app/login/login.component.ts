import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../sysforum-services/authentication.service'
import {Usuario} from '../sysforum-modelos/model-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService],
})
export class LoginComponent implements OnInit {

  user: Usuario = {
    nombre: '',
    usuario: '',
    clave: ''
  };
  logeado: boolean = false;
  constructor(public AuthenticationService: AuthenticationService,
              ) { 

  }

  ngOnInit() {
    this.logeado = false;
  }

  onSubmit(){
    if(this.user.clave!=='' && this.user.usuario!==''){
      this.logeado = this.AuthenticationService.login(this.user.usuario,this.user.clave);
      if(this.logeado==true){
        console.log("usuario logeado");
      }
      else{
        console.log("usuario NO logeado");
      }
    }    
    this.logeado = false; 
  }


}
