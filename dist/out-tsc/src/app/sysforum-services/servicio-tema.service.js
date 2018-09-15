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
var ServicioTemaService = /** @class */ (function () {
    function ServicioTemaService(afs) {
        this.afs = afs;
        this.temaCollection = this.afs.collection('Temas');
    }
    ServicioTemaService.prototype.getTemas = function () {
        this.temaCollection = this.afs.collection('Temas');
        this.temas = this.temaCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.temas;
    };
    ServicioTemaService.prototype.getTemasUsuario = function (usuario) {
        this.temaUsuarioCollection = this.afs.collection('Temas', function (ref) { return ref.where('id_usuario', '==', usuario); });
        this.temas = this.temaUsuarioCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.temas;
    };
    ServicioTemaService.prototype.addTema = function (tema) {
        this.temaCollection.add(tema);
    };
    ServicioTemaService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], ServicioTemaService);
    return ServicioTemaService;
}());
export { ServicioTemaService };
//# sourceMappingURL=servicio-tema.service.js.map