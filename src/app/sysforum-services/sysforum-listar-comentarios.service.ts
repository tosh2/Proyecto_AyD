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

import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SysforumListarComentariosService {
  comenarioCollection: AngularFirestoreCollection<Comentario>;
  comentarios: Observable<Comentario[]>;
  ComentarioDoc: AngularFirestoreDocument<Comentario>;

  constructor(public afs: AngularFirestore) {
    this.comenarioCollection = this.afs.collection<Comentario>('Comentario');
    this.comentarios = this.comenarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Comentario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getComentarios(idTema:String) {
    this.comenarioCollection = this.afs.collection<Comentario>('Comentario',ref => ref.where ('$id_tema','==',idTema));
    this.comentarios = this.comenarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Comentario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.comentarios;
  }

  // addTema(tema: Tema) {
  //   this.temaCollection.add(tema);
  // }
}
