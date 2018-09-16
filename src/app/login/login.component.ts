import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {AuthenticationService} from '../sysforum-services/authentication.service'
import {Usuario} from '../sysforum-modelos/model-usuario';
import { Router, ActivatedRoute } from '@angular/router';
>>>>>>> upstream/Develop

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

=======
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
  
  constructor(
      public AuthenticationService: AuthenticationService,
      private router: Router
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
        this.router.navigate(['/CrearTema']);
      }
      else{
        console.log("usuario NO logeado");
        this.user.usuario = '';
        this.user.clave = '';
      }
    }    
    this.logeado = false; 
  }


>>>>>>> upstream/Develop
}
