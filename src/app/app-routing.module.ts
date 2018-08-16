import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// Importaciones para las rutas
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';

//Rutas que se utilizaran
const routes: Routes = [
  { path: '', redirectTo: '/CrearTema', pathMatch: 'full' },
  { 
    path: 'CrearTema', 
    component: SYSFORUMTEMAComponent,
    children : [
      { path: 'NCrearTema', component: SysforumVerTemaComponent }
    ]
  },
  { path: 'ListarTemas', component: SysforumListaTemasComponent },
  { path: 'VerTemas/:name/:des', component: SysforumVerTemaComponent },
  { path: '**', component: SysforumPageNotFoundComponent}
];


//Modulos que no se utilizaran
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
