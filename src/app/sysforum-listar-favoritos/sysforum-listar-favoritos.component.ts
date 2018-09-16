import { Component, OnInit } from '@angular/core';

import {TemaFavorito} from '../sysforum-modelos/model-tema-favorito';
import {SysforumTemaFavoritoService} from '../sysforum-services/sysforum-tema-favorito.service';
import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';

import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-sysforum-listar-favoritos',
  templateUrl: './sysforum-listar-favoritos.component.html',
  styleUrls: ['./sysforum-listar-favoritos.component.css']
})
export class SysforumListarFavoritosComponent implements OnInit {
  favoritos: TemaFavorito[];
  subscripcionFavoritos : Subscription;

  temas: Tema[];
  subscripcionTemas : Subscription;

  constructor(
    public favoritoServicio: SysforumTemaFavoritoService,
    public temaServicio: ServicioTemaService
  ) { }

  public usuario : string;
  ngOnInit() {
    this.usuario = "0";
    this.subscripcionFavoritos = this.favoritoServicio.getFavoritosID(this.usuario).subscribe(Favo => {
      this.favoritos = Favo;
    });

    this.subscripcionTemas = this.temaServicio.getTemas().subscribe(Tem =>{
      this.temas = Tem;
    });
  }

  ngOnDestroy(){
    this.subscripcionFavoritos.unsubscribe();
    this.subscripcionTemas.unsubscribe();
  }
}
