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
var SysforumListaTemasComponent = /** @class */ (function () {
    function SysforumListaTemasComponent(temaServicio) {
        this.temaServicio = temaServicio;
    }
    SysforumListaTemasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.temaServicio.getTemas().subscribe(function (temas) {
            _this.temas = temas;
        });
    };
    SysforumListaTemasComponent = __decorate([
        Component({
            selector: 'app-sysforum-lista-temas',
            templateUrl: './sysforum-lista-temas.component.html',
            styleUrls: ['./sysforum-lista-temas.component.css']
        }),
        __metadata("design:paramtypes", [ServicioTemaService])
    ], SysforumListaTemasComponent);
    return SysforumListaTemasComponent;
}());
export { SysforumListaTemasComponent };
//# sourceMappingURL=sysforum-lista-temas.component.js.map