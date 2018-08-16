import { Component, OnInit } from '@angular/core';
import {Comentario} from '../sysforum-modelos/model-comentario';
import { ActivatedRoute } from '@angular/router';
import {SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';

@Component({
  selector: 'app-sysforum-ver-tema',
  templateUrl: './sysforum-ver-tema.component.html',
  styleUrls: ['./sysforum-ver-tema.component.css']
})
export class SysforumVerTemaComponent implements OnInit {

  Titulo: string = "Tema:   ";
  Nombre: String;
  Descri: String;
  Identi: String;
  comentario : Comentario[];

  constructor(
    private route: ActivatedRoute,
    public comentarioServicio: SysforumListarComentariosService

  ) { 
    this.Nombre = "";
    this.Descri = "";
    this.Identi = "";
    console.log( "Parent ID changed:", this.route.snapshot.paramMap.get('name') );
  }
   
  ngOnInit(): void {
    this.Nombre = this.route.snapshot.paramMap.get('name');
    this.Titulo += this.Nombre;  
    this.Descri = this.route.snapshot.paramMap.get('des');
    this.Identi = this.route.snapshot.paramMap.get('id');

    this.comentarioServicio.getComentarios(this.Identi).subscribe(Comentar =>{
      this.comentario = Comentar;
    });
  }
}
