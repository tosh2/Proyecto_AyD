var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SysforumCrearCuentaService } from '../sysforum-services/sysforum-crear-cuenta.service';
var SysforumCrearCuentaComponent = /** @class */ (function () {
    function SysforumCrearCuentaComponent(servicioCrearCuenta) {
        this.servicioCrearCuenta = servicioCrearCuenta;
        this.usuario = {
            nombre: '',
            usuario: '',
            clave: ''
        };
    }
    SysforumCrearCuentaComponent.prototype.ngOnInit = function () {
    };
    SysforumCrearCuentaComponent.prototype.onSubmit = function () {
        console.log('agregando tema');
        if (this.usuario.nombre != ''
            && this.usuario.usuario != ''
            && this.usuario.clave != '') {
            for (var s = 0; s < 3; s++) {
                var valor = this.servicioCrearCuenta.getExists(this.usuario.usuario);
                if (valor) {
                    if (s == 2) {
                        this.usuario.usuario = '';
                    }
                }
                else {
                    this.servicioCrearCuenta.crearUsuario(this.usuario);
                    this.usuario.nombre = '';
                    this.usuario.usuario = '';
                    this.usuario.clave = '';
                    return true;
                }
            }
            return true;
        }
        return false;
    };
    SysforumCrearCuentaComponent = __decorate([
        Component({
            selector: 'app-sysforum-crear-cuenta',
            templateUrl: './sysforum-crear-cuenta.component.html',
            styleUrls: ['./sysforum-crear-cuenta.component.css'],
            providers: [SysforumCrearCuentaService]
        }),
        __metadata("design:paramtypes", [SysforumCrearCuentaService])
    ], SysforumCrearCuentaComponent);
    return SysforumCrearCuentaComponent;
}());
export { SysforumCrearCuentaComponent };
//# sourceMappingURL=sysforum-crear-cuenta.component.js.map