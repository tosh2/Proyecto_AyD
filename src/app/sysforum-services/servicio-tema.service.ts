import { Injectable, NgModule } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import {Tema} from '../sysforum-modelos/model-tema';

import { Observable } from 'rxjs';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { map} from 'rxjs/operators';
import { Comentario } from '../sysforum-modelos/comentario';
@Injectable({
  providedIn: 'root'
})
export class ServicioTemaService {

  temaCollection: AngularFirestoreCollection<Tema>;
  temaUsuarioCollection: AngularFirestoreCollection<Tema>;
  temas: Observable<Tema[]>;
  TemaDoc: AngularFirestoreDocument<Tema>;
  constructor(public afs: AngularFirestore) {
  }

  getTemas() {
    this.temaCollection = this.afs.collection<Tema>('Temas');
    this.temas = this.temaCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tema;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.temas;
  }

  getTemasUsuario(usuario: string) {
    this.temaUsuarioCollection = this.afs.collection<Tema>('Temas',ref => ref.where ('id_usuario','==',usuario));
    this.temas = this.temaUsuarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tema;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    return this.temas;
  }

  addTema(tema: Tema) {
    this.temaCollection.add(tema);
  }

}
