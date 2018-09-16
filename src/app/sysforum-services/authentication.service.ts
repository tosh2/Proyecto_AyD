import { Injectable } from '@angular/core';
import {Usuario} from '../sysforum-modelos/model-usuario';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  UsuarioDoc: AngularFirestoreDocument<Usuario>;
  usuariosC : Usuario[];

  constructor(public afs: AngularFirestore) { 
    this.usuariosCollection = this.afs.collection<Usuario>('Usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  login(userName: string, pass: string){
    this.usuariosCollection = this.afs.collection<Usuario>('Usuarios', ref => ref.where('usuario','==',userName).where('clave','==',pass));
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  
   this.usuarios.subscribe(users => {
      this.usuariosC = users;
    });


    if(this.usuariosC == null){
      return false;
    }

    console.log(this.usuariosC);

    if(this.usuariosC.length==1){
      localStorage.setItem("userSesion",this.usuariosC[0].usuario);
      localStorage.setItem("nameSesion",this.usuariosC[0].nombre);
      localStorage.setItem("nameSesion",this.usuariosC[0].id);
      return true;
    }else{
      return false;
    }
    
    
  }

  logout(){

  }

  getSesion(){
    
  }
  
}
