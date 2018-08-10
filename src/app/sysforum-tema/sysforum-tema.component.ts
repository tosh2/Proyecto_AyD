import { Component, OnInit } from '@angular/core';

import {Tema} from '../sysforum-modelos/model-tema';
import { ServicioTemaService} from '../sysforum-services/servicio-tema.service'

@Component({
  selector: 'app-sysforum-tema',
  templateUrl: './sysforum-tema.component.html',
  styleUrls: ['./sysforum-tema.component.css']
})
export class SYSFORUMTEMAComponent implements OnInit {
  
  tema: Tema = {
    title:'',
    description:''

  };

  constructor(public serviciotema: ServicioTemaService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("agregando tema");
    if(this.tema.title!='' && this.tema.description!=''){
      this.serviciotema.addTema(this.tema);
      this.tema.title='';
      this.tema.description='';
    }
  }

}
