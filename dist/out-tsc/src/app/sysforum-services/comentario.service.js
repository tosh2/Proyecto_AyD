var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFirestore, } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
var ComentarioService = /** @class */ (function () {
    function ComentarioService(afs) {
        this.afs = afs;
        this.comentarioCollection = this.afs.collection('Comentario');
        this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                //data.$id_tema = a.payload.doc.id;
                return data;
            });
        }));
    }
    ComentarioService.prototype.getComentarios = function () {
        //return this.listaComentarios = this.firebase.list('Comentario');
        return this.comentarios;
    };
    ComentarioService.prototype.insertarComentario = function (comentario) {
        //this.listaComentarios.push({
        //  contenido: comentario.contenido
        //});
        this.comentarioCollection.add(comentario);
    };
    ComentarioService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], ComentarioService);
    return ComentarioService;
}());
export { ComentarioService };
//# sourceMappingURL=comentario.service.js.map