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
    tag : ''
  };

  userId: String;
  userName: String;

  constructor(public serviciotema: ServicioTemaService) { }

  ngOnInit() {
  }


  setId(id: String){
    if(id == ''){
      this.userId = '0';
      return this.userId;
    }
    else{
      this.userId = id;
      return this.userId;
    }     
  }

  setNombre(name: String){
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
      if (this.tema.title !== '' && this.tema.description !== '') {
        if(this.tema.tag == ''){this.tema.tag = '#sysforum';}
        this.serviciotema.addTema(this.tema);
        this.tema.title = '';
        this.tema.description = '';
        this.tema.tag = '';
      }
  }

}
