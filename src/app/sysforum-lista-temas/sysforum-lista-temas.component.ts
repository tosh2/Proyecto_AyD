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
<<<<<<< HEAD
      
      this.temaServicio.getTemas().subscribe(temas =>{        
=======
      this.temaServicio.getTemas().subscribe(temas => {
>>>>>>> f7d57109451de269ff22076da06d6b3dd75de17b
        this.temas = temas;
      });
  }
}
