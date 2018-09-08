import { Injectable } from '@angular/core';

  import {Like} from '../sysforum-modelos/model-like';

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
export class SysforumLikeService {

  likesCollection:AngularFirestoreCollection<Like>;
  likes: Observable<Like[]>;
  likeDoc: AngularFirestoreDocument<Like>;

  constructor(public afs: AngularFirestore) {
    this.likesCollection = this.afs.collection<Like>('Like');
    this.likes =  this.likesCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a => {
        const data = a.payload.doc.data() as Like;
        return data;
      });
    }));
  }
  getLikes(){
    return this.likes
  }

  InsertarRegistroLike(l: Like){
    this.likesCollection.add(l);
  }
}
