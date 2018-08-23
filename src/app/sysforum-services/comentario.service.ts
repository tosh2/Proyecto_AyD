import { Injectable } from '@angular/core';

import{AngularFireDatabase,AngularFireList}from 'angularfire2/database';
import { Comentario } from '../sysforum-modelos/comentario';


import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  //listaComentarios :AngularFireList<any>;
  //selectedComentario :Comentario = new Comentario();

  //constructor(private firebase: AngularFireDatabase) { }

  comentarioCollection:AngularFirestoreCollection<Comentario>;
  comentarios: Observable<Comentario[]>;
  comentarioDoc: AngularFirestoreDocument<Comentario>;

  constructor(public afs: AngularFirestore) {
    this.comentarioCollection = this.afs.collection<Comentario>('Comentario');
    this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Comentario;
        //data.$id_tema = a.payload.doc.id;
        return data;
      });
    }));
  }

  getComentarios(){
    //return this.listaComentarios = this.firebase.list('Comentario');
    return this.comentarios
  }

  insertarComentario(comentario: Comentario){
    //this.listaComentarios.push({
    //  contenido: comentario.contenido
    //});

    this.comentarioCollection.add(comentario);
  }
}
