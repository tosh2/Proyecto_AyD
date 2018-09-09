import { Component, OnInit } from '@angular/core';
import {Comentario} from '../sysforum-modelos/model-comentario';
import {Like} from '../sysforum-modelos/model-like';
import { ActivatedRoute } from '@angular/router';
import {SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';
import { NgForm } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { FirebaseApp } from 'angularfire2';
import { SysforumLikeService } from '../sysforum-services/sysforum-like.service';

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
  bandera: boolean;
  likeRegistrado : Like[];
  closed:boolean = false;

  coment: Comentario ={
    $id_tema : '',
    contenido : '',
    like: 0,
    id_usuario: '',
    nombre_usuario: ''
  };

  likeRegist : Like = {
    $id_comentario: '',
    $id_usuario: ''
  }

  userId : string;
  userName : string;

  constructor(
    private route: ActivatedRoute,
    public comentarioServicio: SysforumListarComentariosService,
    public likeRegisServicio: SysforumLikeService,
  ){ 
    this.Nombre = "";
    this.Descri = "";
    this.Identi = "";
    this.Tag = "";
    this.Vsesion = null;
    this.bandera = false;
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

    this.likeRegisServicio.getLikes().subscribe(CLike =>{
      this.likeRegistrado = CLike;
    });
    this.setId('');
    this.setName('');
  }

  setId(id: string){
    if(id == ''){
      this.userId = '0';
      return this.userId;
    }else{
      this.userId = id;
      return this.userId;
    }
  }

  setName(name: string){
    if(name == ''){
      this.userName = 'UsuarioPrueba';
      return this.userName;
    }else{
      this.userName = name;
      return this.userName;
    }
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
    this.Vsesion = '2';
    console.log(this.Vsesion);
    console.log(comen);

    if(this.Vsesion == comen.idSesion){
      this.bandera = true;
      console.log('Esta repetido');
    }

    for (let index = 0; index < this.likeRegistrado.length; index++) {
      const element= this.likeRegistrado[index]
      if(this.Vsesion == element.$id_usuario && comen.id == element.$id_comentario){
        this.bandera = true;
        console.log('Esta repetido');
      }
    }

    if(this.bandera == false){
      comen.like = comen.like +1;
      this.likeRegist.$id_comentario = comen.id;
      this.likeRegist.$id_usuario = this.Vsesion;
      this.likeRegisServicio.InsertarRegistroLike(this.likeRegist);
      this.comentarioServicio.updateLike(comen); 
    }

  }


}