var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// Importaciones para las rutas
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumMisTemasComponent } from './sysforum-mis-temas/sysforum-mis-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SysforumCrearCuentaComponent } from './sysforum-crear-cuenta/sysforum-crear-cuenta.component';
//Rutas que se utilizaran
var routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    { path: 'CrearTema', component: SYSFORUMTEMAComponent,
        children: [
            { path: 'NCrearTema', component: SysforumVerTemaComponent }
        ]
    },
    { path: 'ListarTemas', component: SysforumListaTemasComponent },
    { path: 'ListarMisTemas', component: SysforumMisTemasComponent },
    { path: 'CrearUsuario', component: SysforumCrearCuentaComponent },
    { path: 'VerTemas/:id/:name/:des/:tag', component: SysforumVerTemaComponent },
    { path: '**', component: SysforumPageNotFoundComponent },
];
//Modulos que no se utilizaran
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                BrowserModule,
                RouterModule.forRoot(routes)
            ],
            exports: [
                RouterModule
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map