import { Injectable } from '@angular/core';
import { Usuario } from '../sysforum-modelos/model-usuario';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SysforumCrearCuentaService {
  Collection: AngularFirestoreCollection<Usuario>;
  UsuarioCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  usuariosC : Array<Usuario>;

  constructor(public afs: AngularFirestore) {
    this.Collection = this.afs.collection<Usuario>('Usuarios');
    this.UsuarioCollection = this.afs.collection<Usuario>('Usuarios');

    this.usuarios = new Observable();
    this.UsuarioCollection = this.afs.collection<Usuario>('Usuarios'
    ,ref => ref.where ('usuario','==',"usuario"));
    this.usuarios = this.UsuarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    this.usuarios.subscribe(users => {
      this.usuariosC = users;
    });

  }



  crearUsuario(usuario:Usuario) {
      this.Collection.add(usuario);
  }


  getExists(usuario: string){
    this.usuarios = new Observable();
    this.UsuarioCollection = this.afs.collection<Usuario>('Usuarios'
    ,ref => ref.where ('usuario','==',usuario));
    this.usuarios = this.UsuarioCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));


      this.usuarios.subscribe(users => {
        this.usuariosC = users;
      });

        console.log(this.usuariosC.length);

      if((this.usuariosC.length == 0)){
        return false;
      }else{
        return true;
      }

  }

}
