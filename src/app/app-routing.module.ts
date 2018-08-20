import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


// Importaciones para las rutas
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


//Rutas que se utilizaran
const routes: Routes = [
 {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  { path: 'crear', redirectTo: '/CrearTema', pathMatch: 'full' },
  { 
    path: 'CrearTema', 
    component: SYSFORUMTEMAComponent,
    children : [
      { path: 'NCrearTema', component: SysforumVerTemaComponent }
    ]
  },
  { path: 'ListarTemas', component: SysforumListaTemasComponent },
  { path: 'VerTemas/:id/:name/:des', component: SysforumVerTemaComponent },
  { path: '**', component: SysforumPageNotFoundComponent},

];


//Modulos que no se utilizaran
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule 
  ],
})

export class AppRoutingModule { }
