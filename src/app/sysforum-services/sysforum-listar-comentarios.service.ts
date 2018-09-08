import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import {Comentario} from '../sysforum-modelos/model-comentario';

import { Observable } from 'rxjs';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import * as firebase from 'firebase';

import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SysforumListarComentariosService {
  comentarioCollection: AngularFirestoreCollection<Comentario>;
  comentarios: Observable<Comentario[]>;
  ComentarioDoc: AngularFirestoreDocument<Comentario>;

  constructor(public afs: AngularFirestore) {
    this.comentarioCollection = this.afs.collection<Comentario>('Comentario');
    this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Comentario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getComentarios(idTema:String) {
    this.comentarioCollection = this.afs.collection<Comentario>('Comentario',ref => ref.where ('$id_tema','==',idTema));
    this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Comentario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.comentarios;
  }

  insertarComentario(comentario: Comentario){
    //this.listaComentarios.push({
    //  contenido: comentario.contenido
    //});
    //comentario.fecha = firebase.firestore.FieldValue.serverTimestamp();
    
    this.comentarioCollection.add(comentario);
}

  // addTema(tema: Tema) {
  //   this.temaCollection.add(tema);
  // }

  updateLike(coment: Comentario){
    this.ComentarioDoc = this.afs.doc(`Comentario/${coment.id}`);
    this.ComentarioDoc.update(coment);
  }

}
