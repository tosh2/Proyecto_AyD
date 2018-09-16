import { Component, OnInit } from '@angular/core';

import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { RouterModule } from '@angular/router'
import { Subscriber } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-sysforum-mis-temas',
  templateUrl: './sysforum-mis-temas.component.html',
  styleUrls: ['./sysforum-mis-temas.component.css']
})
export class SysforumMisTemasComponent implements OnInit {
  temas: Tema[];
  inscripcionTemas : Subscription;
  constructor(public temaServicio: ServicioTemaService) { 
    
    this.temaServicio.getTemas().subscribe(temas =>{        
    this.temas = temas;
    }); 
  }

  
  public usuario : string;

  ngOnInit() {
    this.usuario = "0";
   this.inscripcionTemas =  this.temaServicio.getTemasUsuario(this.usuario).subscribe(temas => {        
      this.temas = temas;
    });
  }
  ngOnDestroy() {
    this.inscripcionTemas.unsubscribe();
   }
}
