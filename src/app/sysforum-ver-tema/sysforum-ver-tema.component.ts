import { Component, OnInit } from '@angular/core';
import {Comentario} from '../sysforum-modelos/model-comentario';
import {Like} from '../sysforum-modelos/model-like';
import { ActivatedRoute } from '@angular/router';
import {SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';
import { NgForm } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { OnDestroy } from "@angular/core";
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseApp } from 'angularfire2';
import { SysforumLikeService } from '../sysforum-services/sysforum-like.service';
import {TemaFavorito} from '../sysforum-modelos/model-tema-favorito';
import { SysforumTemaFavoritoService } from '../sysforum-services/sysforum-tema-favorito.service';

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
  banderafav:boolean = false;
  favoritosRegistrado: TemaFavorito[] = null;
  subscripcionFavorito: Subscription
  coment: Comentario ={
    $id_tema : '',
    contenido : '',
    like: 0,
    id_usuario: '',
    nombre_usuario: ''
  };

  temFav: TemaFavorito ={
    $id_tema: '',
    $id_usuario: '',
    banderaFavorito: false
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
    public temaFavoritoServicio: SysforumTemaFavoritoService

  
  ){ 
    this.Nombre = "";
    this.Descri = "";
    this.Identi = "";
    this.banderafav = false;
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
    
  this.subscripcionFavorito =  this.temaFavoritoServicio.getFavoritos()
    .subscribe((CFav) =>{

      this.favoritosRegistrado = CFav;
    }
  );

    this.comentarioServicio.getComentarios(this.Identi).subscribe(Comentar =>{
      this.comentario = Comentar;
    });
    this.coment.$id_tema = this.route.snapshot.paramMap.get('id');

    this.likeRegisServicio.getLikes().subscribe(CLike =>{
      console.log("entro en like")
      this.likeRegistrado = CLike;
    });
    

    this.route.url
      .subscribe(url => console.log('The URL changed to: ' + url));

    this.coment.id_usuario=this.setId('');
    this.coment.nombre_usuario=this.setName('');
    console.log ("ngonInit");
  }
  ngOnDestroy() {
   this.subscripcionFavorito.unsubscribe();
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

    if( this.coment.contenido !=='' && this.coment.id_usuario!=='' && this.coment.nombre_usuario!==''){
      console.log(this.coment.nombre_usuario);
      //this.comentario.fechayhora = Date.now().toString();
      //this.comentarioService.insertarComentario(this.comentario);
      
      this.coment.fecha  = new Date();
      this.coment.like = 0;
      this.comentarioServicio.insertarComentario(this.coment);
      this.coment.contenido = '';

    }
  }

  darLike(even, comen){
    this.Vsesion = this.userId;
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

  darFavorito(even, fav){
    this.Vsesion = this.userId;
    console.log(this.Vsesion);
    console.log(fav);

    for (let index = 0; index < this.favoritosRegistrado.length; index++) {
      const elemento= this.favoritosRegistrado[index]
      if(this.Vsesion == elemento.$id_usuario && fav.id == elemento.$id_tema){
        this.banderafav = true;
        console.log('Esta repetido');
      }

    }

    if(this.banderafav == false){
      this.temFav.banderaFavorito = true;
      this.temFav.$id_tema = this.Identi;
      this.temFav.$id_usuario = this.userId;
      this.temaFavoritoServicio.InsertarRegistroFavorito(this.temFav);
     
    }
 
  }

}