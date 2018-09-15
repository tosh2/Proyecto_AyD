var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
import { ServicioTemaService } from './sysforum-services/servicio-tema.service';
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';
import { SysforumListarComentariosService } from './sysforum-services/sysforum-listar-comentarios.service';
import { SysforumLikeService } from './sysforum-services/sysforum-like.service';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SysforumLoginComponent } from './sysforum-login/sysforum-login.component';
import { SysforumMisTemasComponent } from './sysforum-mis-temas/sysforum-mis-temas.component';
import { SysforumCrearCuentaComponent } from './sysforum-crear-cuenta/sysforum-crear-cuenta.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SYSFORUMTEMAComponent,
                SysforumListaTemasComponent,
                SysforumVerTemaComponent,
                SysforumPageNotFoundComponent,
                AdminLayoutComponent,
                LoginComponent,
                SysforumLoginComponent,
                SysforumMisTemasComponent,
                SysforumCrearCuentaComponent
            ],
            imports: [
                FormsModule,
                BrowserModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFireDatabaseModule,
                AngularFirestoreModule.enablePersistence(),
                AngularFireModule,
                NgbModule.forRoot(),
                BrowserAnimationsModule,
                HttpModule,
                ComponentsModule,
                RouterModule,
                AppRoutingModule
            ],
            providers: [
                ServicioTemaService, AngularFireDatabase, AngularFirestore,
                SysforumListarComentariosService, SysforumLikeService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map