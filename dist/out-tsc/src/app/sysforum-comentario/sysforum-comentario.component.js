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
//Service
import { ComentarioService } from '../sysforum-services/comentario.service';
var SysforumComentarioComponent = /** @class */ (function () {
    function SysforumComentarioComponent(comentarioService) {
        this.comentarioService = comentarioService;
        this.comentario = {
            $id_tema: '',
            contenido: '',
        };
    }
    SysforumComentarioComponent.prototype.ngOnInit = function () {
        this.comentarioService.getComentarios();
    };
    SysforumComentarioComponent.prototype.onSubmit = function (comentarioForm) {
        //Con esto inserto todos los datos
        //this.comentarioService.insertarComentario(comentarioForm.value)
        console.log('Agregando comentario');
        if (this.comentario.contenido !== '') {
            //this.comentario.fechayhora = Date.now().toString();
            //this.comentarioService.insertarComentario(this.comentario);
            this.comentarioService.insertarComentario(comentarioForm.value);
            this.comentario.contenido = '';
        }
    };
    SysforumComentarioComponent = __decorate([
        Component({
            selector: 'app-sysforum-comentario',
            templateUrl: './sysforum-comentario.component.html',
            styleUrls: ['./sysforum-comentario.component.css']
        }),
        __metadata("design:paramtypes", [ComentarioService])
    ], SysforumComentarioComponent);
    return SysforumComentarioComponent;
}());
export { SysforumComentarioComponent };
//# sourceMappingURL=sysforum-comentario.component.js.map