import { Component, OnInit } from '@angular/core';

//Service
import {ComentarioService} from '../sysforum-services/comentario.service'
import { NgForm } from '@angular/forms';
import { Comentario } from '../sysforum-modelos/comentario';

@Component({
  selector: 'app-sysforum-comentario',
  templateUrl: './sysforum-comentario.component.html',
  styleUrls: ['./sysforum-comentario.component.css']
})
export class SysforumComentarioComponent implements OnInit {

  comentario: Comentario ={
    $id_tema : '',
    contenido : '',
    //fechayhora: null
  };



  constructor(private comentarioService: ComentarioService) { }

  ngOnInit() {
    this.comentarioService.getComentarios();
  }

  onSubmit(comentarioForm: NgForm){
    //Con esto inserto todos los datos
    //this.comentarioService.insertarComentario(comentarioForm.value)
  
    console.log('Agregando comentario');
    if( this.comentario.contenido !==''){
      //this.comentario.fechayhora = Date.now().toString();
      
      //this.comentarioService.insertarComentario(this.comentario);
      this.comentarioService.insertarComentario(comentarioForm.value);
      
      this.comentario.contenido = '';

    }
  }

}
