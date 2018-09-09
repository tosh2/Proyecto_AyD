import { Component, OnInit} from '@angular/core';
import {Tema} from '../sysforum-modelos/model-tema';
import { ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-sysforum-tema',
  templateUrl: './sysforum-tema.component.html',
  styleUrls: ['./sysforum-tema.component.css'],
  providers: [ServicioTemaService],
})
export class SYSFORUMTEMAComponent implements OnInit {

  tema: Tema = {
    title: '',
    description: '',
    tag : '',
    id_usuario: '',
    nombre_usuario: ''
  };

  userId: string;
  userName: string;

  constructor(public serviciotema: ServicioTemaService) { }

  ngOnInit() {
    this.setId('');
    this.setNombre('');
    
  }


  setId(id: string){
    if(id == ''){
      this.userId = '0';
      return this.userId;
    }
    else{
      this.userId = id;
      return this.userId;
    }     
  }

  setNombre(name: string){
    if(name == ''){
      this.userName = 'UsuarioPrueba';
      return this.userName;
    }
    else{
      this.userName = name;
      return this.userName;
    }      
  }

  onSubmit() {
    console.log('agregando tema');
      if (this.tema.title !== '' && this.tema.description !== ''&&this.tema.nombre_usuario!==''&&this.tema.id_usuario!=='') {
        if(this.tema.tag == ''){this.tema.tag = '#sysforum';}
        this.serviciotema.addTema(this.tema);
        this.tema.title = '';
        this.tema.description = '';
        this.tema.tag = '';
        return true;
      }
      return false;
  }

}
