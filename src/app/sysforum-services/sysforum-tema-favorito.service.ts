import { Injectable } from '@angular/core';
import {TemaFavorito} from '../sysforum-modelos/model-tema-favorito';
import{
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SysforumTemaFavoritoService {

  favoritosCollection:AngularFirestoreCollection<TemaFavorito>;
  favoritos: Observable<TemaFavorito[]>;
  favoritoDoc: AngularFirestoreDocument<TemaFavorito>;

  constructor(public afs: AngularFirestore) {
    this.favoritosCollection = this.afs.collection<TemaFavorito>('TemaFavorito');
    this.favoritos =  this.favoritosCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as TemaFavorito;
        return data;
      });
    }));
  }
  getFavoritos(){
    return this.favoritos
  }

  InsertarRegistroFavorito(l: TemaFavorito){
    this.favoritosCollection.add(l);
  }
}
