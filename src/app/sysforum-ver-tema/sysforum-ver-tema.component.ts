import { Component, OnInit } from '@angular/core';
import {Comentario} from '../sysforum-modelos/model-comentario';
import { ActivatedRoute } from '@angular/router';
import {SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';
import { NgForm } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-sysforum-ver-tema',
  templateUrl: './sysforum-ver-tema.component.html',
  styleUrls: ['./sysforum-ver-tema.component.css']
})
export class SysforumVerTemaComponent implements OnInit {

  Titulo: string = "Tema:   ";
  Nombre: String;
  Descri: String;
  Identi: string;
  Tag: string;
  comentario : Comentario[];
  Vsesion: string;

  coment: Comentario ={
    $id_tema : '',
    contenido : '',
    like: 0,
  };

  constructor(
    private route: ActivatedRoute,
    public comentarioServicio: SysforumListarComentariosService,
  ) { 
    this.Nombre = "";
    this.Descri = "";
    this.Identi = "";
    this.Tag = "";
    this.Vsesion = null;
    console.log( "Parent ID changed:", this.route.snapshot.paramMap.get('name') );
  }
   
  ngOnInit(): void {
    this.Nombre = this.route.snapshot.paramMap.get('name');
    this.Titulo += this.Nombre;  
    this.Descri = this.route.snapshot.paramMap.get('des');
    this.Identi = this.route.snapshot.paramMap.get('id');
    this.Tag = this.route.snapshot.paramMap.get('tag');

    this.comentarioServicio.getComentarios(this.Identi).subscribe(Comentar =>{
      this.comentario = Comentar;
    });
    this.coment.$id_tema = this.route.snapshot.paramMap.get('id');

  }

  onSubmit(comentarioForm: NgForm){
    //Con esto inserto todos los datos
    //this.comentarioService.insertarComentario(comentarioForm.value)
  
    console.log('Agregando comentario');
    if( this.coment.contenido !==''){
      console.log(this.coment.$id_tema);
      //this.comentario.fechayhora = Date.now().toString();
      
      //this.comentarioService.insertarComentario(this.comentario);
      
      
      this.coment.fecha  = new Date();
      this.coment.like = 0;
      this.comentarioServicio.insertarComentario(this.coment);
      
      this.coment.contenido = '';

    }
  }

  darLike(even, comen){
    console.log(comen);
    comen.like = comen.like +1;
    this.comentarioServicio.updateLike(comen);  
  }


}
