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
import { ServicioTemaService } from '../sysforum-services/servicio-tema.service';
var SYSFORUMTEMAComponent = /** @class */ (function () {
    function SYSFORUMTEMAComponent(serviciotema) {
        this.serviciotema = serviciotema;
        this.tema = {
            title: '',
            description: '',
            tag: '',
            id_usuario: '',
            nombre_usuario: ''
        };
    }
    SYSFORUMTEMAComponent.prototype.ngOnInit = function () {
        this.tema.id_usuario = this.setId('');
        this.tema.nombre_usuario = this.setNombre('');
    };
    SYSFORUMTEMAComponent.prototype.setId = function (id) {
        if (id == '') {
            this.userId = '0';
            return this.userId;
        }
        else {
            this.userId = id;
            return this.userId;
        }
    };
    SYSFORUMTEMAComponent.prototype.setNombre = function (name) {
        if (name == '') {
            this.userName = 'UsuarioPrueba';
            return this.userName;
        }
        else {
            this.userName = name;
            return this.userName;
        }
    };
    SYSFORUMTEMAComponent.prototype.onSubmit = function () {
        console.log('agregando tema');
        if (this.tema.title !== '' && this.tema.description !== '' && this.tema.nombre_usuario !== '' && this.tema.id_usuario !== '') {
            if (this.tema.tag == '') {
                this.tema.tag = '#sysforum';
            }
            this.serviciotema.addTema(this.tema);
            this.tema.title = '';
            this.tema.description = '';
            this.tema.tag = '';
            return true;
        }
        return false;
    };
    SYSFORUMTEMAComponent = __decorate([
        Component({
            selector: 'app-sysforum-tema',
            templateUrl: './sysforum-tema.component.html',
            styleUrls: ['./sysforum-tema.component.css'],
            providers: [ServicioTemaService],
        }),
        __metadata("design:paramtypes", [ServicioTemaService])
    ], SYSFORUMTEMAComponent);
    return SYSFORUMTEMAComponent;
}());
export { SYSFORUMTEMAComponent };
//# sourceMappingURL=sysforum-tema.component.js.map