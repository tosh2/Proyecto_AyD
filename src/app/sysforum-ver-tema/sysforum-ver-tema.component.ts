import { Component, OnInit } from '@angular/core';
import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { ActivatedRoute } from '@angular/router';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-sysforum-ver-tema',
  templateUrl: './sysforum-ver-tema.component.html',
  styleUrls: ['./sysforum-ver-tema.component.css']
})
export class SysforumVerTemaComponent implements OnInit {

  Titulo: string = "Tema:   ";
  Nombre: String;
  Descri: String;

  constructor(
    private route: ActivatedRoute,
    private temaService: ServicioTemaService
  ) { 
    this.Nombre = "";
    this.Descri = "";
    console.log( "Parent ID changed:", this.route.snapshot.paramMap.get('name') );
  }
   
  ngOnInit(): void {
    this.Nombre = this.route.snapshot.paramMap.get('name');
    this.Titulo += this.Nombre;  
    this.Descri = this.route.snapshot.paramMap.get('des');
  }
  
}
