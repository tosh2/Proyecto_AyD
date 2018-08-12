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
<<<<<<< HEAD
    title: '',
    description: ''

=======
    title:'',
    description:''
>>>>>>> 5fd238123ee6fca89345d905ad4c47dc0f5a74db
  };

  constructor(public serviciotema: ServicioTemaService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('agregando tema');
      if (this.tema.title !== '' && this.tema.description !== '') {
        this.serviciotema.addTema(this.tema);
        this.tema.title = '';
        this.tema.description = '';
      }
  }

}
