import { Component, OnInit } from '@angular/core';

import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sysforum-lista-temas',
  templateUrl: './sysforum-lista-temas.component.html',
  styleUrls: ['./sysforum-lista-temas.component.css']
})
export class SysforumListaTemasComponent implements OnInit {
  temas: Tema[];
  constructor(public temaServicio: ServicioTemaService) { }
  ngOnInit() {
 
      this.temaServicio.getTemas().subscribe(temas =>{        

        this.temas = temas;
        
      });
  }
}
