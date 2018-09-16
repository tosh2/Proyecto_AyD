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
  
  constructor(public AuthenticationService: AuthenticationService,
              ) { 

  }

  ngOnInit() {
   
  }

  onSubmit(){
    
  }


}
