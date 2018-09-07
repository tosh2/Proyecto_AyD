import { Component, OnInit } from '@angular/core';

import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-sysforum-mis-temas',
  templateUrl: './sysforum-mis-temas.component.html',
  styleUrls: ['./sysforum-mis-temas.component.css']
})
export class SysforumMisTemasComponent implements OnInit {
  temas: Tema[];
  constructor(public temaServicio: ServicioTemaService) { 
    this.temaServicio.getTemas().subscribe(temas =>{        
    this.temas = temas;
    }); 
  }

  ngOnInit() {
    this.temaServicio.getTemasUsuario("cualquiera").subscribe(temas => {        
      this.temas = temas;
    });
  }

}
