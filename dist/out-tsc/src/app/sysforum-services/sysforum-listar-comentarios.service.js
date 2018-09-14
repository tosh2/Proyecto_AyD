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
var SysforumListarComentariosService = /** @class */ (function () {
    function SysforumListarComentariosService(afs) {
        this.afs = afs;
        this.comentarioCollection = this.afs.collection('Comentario');
        this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    SysforumListarComentariosService.prototype.getComentarios = function (idTema) {
        this.comentarioCollection = this.afs.collection('Comentario', function (ref) { return ref.where('$id_tema', '==', idTema); });
        this.comentarios = this.comentarioCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.comentarios;
    };
    SysforumListarComentariosService.prototype.insertarComentario = function (comentario) {
        //this.listaComentarios.push({
        //  contenido: comentario.contenido
        //});
        //comentario.fecha = firebase.firestore.FieldValue.serverTimestamp();
        this.comentarioCollection.add(comentario);
    };
    // addTema(tema: Tema) {
    //   this.temaCollection.add(tema);
    // }
    SysforumListarComentariosService.prototype.updateLike = function (coment) {
        this.ComentarioDoc = this.afs.doc("Comentario/" + coment.id);
        this.ComentarioDoc.update(coment);
    };
    SysforumListarComentariosService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], SysforumListarComentariosService);
    return SysforumListarComentariosService;
}());
export { SysforumListarComentariosService };
//# sourceMappingURL=sysforum-listar-comentarios.service.js.map