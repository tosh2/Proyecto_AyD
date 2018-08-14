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
@Injectable({
  providedIn: 'root'
})
export class ServicioTemaService {

  temaCollection: AngularFirestoreCollection<Tema>;
  temas: Observable<Tema[]>;
  TemaDoc: AngularFirestoreDocument<Tema>;

  constructor(public afs: AngularFirestore) {
    this.temaCollection = this.afs.collection<Tema>('Temas');
    this.temas = this.temaCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tema;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTemas() {
    return this.temas; 
  }

  addTema(tema: Tema) {
    this.temaCollection.add(tema);
  }

}
