import { Component, OnInit } from '@angular/core';

import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import {ComentarioService}from '../sysforum-services/comentario.service';
import { Comentario } from '../sysforum-modelos/comentario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sysforum-lista-temas',
  templateUrl: './sysforum-lista-temas.component.html',
  styleUrls: ['./sysforum-lista-temas.component.css']
})
export class SysforumListaTemasComponent implements OnInit {
  temas: Tema[];
  comentarios: Comentario[];

  comentario: Comentario ={
    $id_tema : '',
    contenido : '',
    //fechayhora: null
  };
  
  constructor(public temaServicio: ServicioTemaService, public comentarioServicio :ComentarioService) { }
   
  ngOnInit() {
      this.temaServicio.getTemas().subscribe(temas =>{
        this.temas = temas;
      });

      this.comentarioServicio.getComentarios().subscribe(comentarios=>{
        this.comentarios = comentarios
      })
      
      
  }

  onSubmit(comentarioForm: NgForm,id_tema:string){
    //Con esto inserto todos los datos
    //this.comentarioService.insertarComentario(comentarioForm.value)
  
    console.log('Agregando comentario');
    if( this.comentario.contenido !==''){
      //this.comentario.fechayhora = Date.now().toString();
      //console.log(id_tema);
      
      this.comentario.$id_tema = id_tema;
      this.comentarioServicio.insertarComentario(this.comentario);
      //this.comentarioServicio.insertarComentario(comentarioForm.value);
      this.comentario.$id_tema = '';
      this.comentario.contenido = '';

    }

   

    
    
  }
}
