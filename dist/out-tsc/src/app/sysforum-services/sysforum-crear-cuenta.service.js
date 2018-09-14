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
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
var SysforumCrearCuentaService = /** @class */ (function () {
    function SysforumCrearCuentaService(afs) {
        this.afs = afs;
        this.Collection = this.afs.collection('Usuarios');
    }
    SysforumCrearCuentaService.prototype.crearUsuario = function (usuario) {
        this.Collection.add(usuario);
    };
    SysforumCrearCuentaService.prototype.getExists = function (usuario) {
        var _this = this;
        this.usuarios = new Observable();
        this.UsuarioCollection = this.afs.collection('Usuarios', function (ref) { return ref.where('usuario', '==', usuario); });
        this.usuarios = this.UsuarioCollection.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        this.usuarios.subscribe(function (users) {
            _this.usuariosC = users;
        });
        if (this.usuariosC.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SysforumCrearCuentaService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], SysforumCrearCuentaService);
    return SysforumCrearCuentaService;
}());
export { SysforumCrearCuentaService };
//# sourceMappingURL=sysforum-crear-cuenta.service.js.map