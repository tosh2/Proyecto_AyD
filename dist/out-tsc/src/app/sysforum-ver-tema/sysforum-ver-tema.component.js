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
import { ActivatedRoute } from '@angular/router';
import { SysforumListarComentariosService } from '../sysforum-services/sysforum-listar-comentarios.service';
import { SysforumLikeService } from '../sysforum-services/sysforum-like.service';
var SysforumVerTemaComponent = /** @class */ (function () {
    function SysforumVerTemaComponent(route, comentarioServicio, likeRegisServicio) {
        this.route = route;
        this.comentarioServicio = comentarioServicio;
        this.likeRegisServicio = likeRegisServicio;
        this.Titulo = "Tema:   ";
        this.closed = false;
        this.coment = {
            $id_tema: '',
            contenido: '',
            like: 0,
            id_usuario: '',
            nombre_usuario: ''
        };
        this.likeRegist = {
            $id_comentario: '',
            $id_usuario: ''
        };
        this.Nombre = "";
        this.Descri = "";
        this.Identi = "";
        this.Tag = "";
        this.Vsesion = null;
        this.bandera = false;
        console.log("Parent ID changed:", this.route.snapshot.paramMap.get('name'));
    }
    SysforumVerTemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Nombre = this.route.snapshot.paramMap.get('name');
        this.Titulo += this.Nombre;
        this.Descri = this.route.snapshot.paramMap.get('des');
        this.Identi = this.route.snapshot.paramMap.get('id');
        this.Tag = this.route.snapshot.paramMap.get('tag');
        this.comentarioServicio.getComentarios(this.Identi).subscribe(function (Comentar) {
            _this.comentario = Comentar;
        });
        this.coment.$id_tema = this.route.snapshot.paramMap.get('id');
        this.likeRegisServicio.getLikes().subscribe(function (CLike) {
            _this.likeRegistrado = CLike;
        });
        this.coment.id_usuario = this.setId('');
        this.coment.nombre_usuario = this.setName('');
    };
    SysforumVerTemaComponent.prototype.setId = function (id) {
        if (id == '') {
            this.userId = '0';
            return this.userId;
        }
        else {
            this.userId = id;
            return this.userId;
        }
    };
    SysforumVerTemaComponent.prototype.setName = function (name) {
        if (name == '') {
            this.userName = 'UsuarioPrueba';
            return this.userName;
        }
        else {
            this.userName = name;
            return this.userName;
        }
    };
    SysforumVerTemaComponent.prototype.onSubmit = function (comentarioForm) {
        //Con esto inserto todos los datos
        //this.comentarioService.insertarComentario(comentarioForm.value)
        console.log('Agregando comentario');
        if (this.coment.contenido !== '' && this.coment.id_usuario !== '' && this.coment.nombre_usuario !== '') {
            console.log(this.coment.nombre_usuario);
            //this.comentario.fechayhora = Date.now().toString();
            //this.comentarioService.insertarComentario(this.comentario);
            this.coment.fecha = new Date();
            this.coment.like = 0;
            this.comentarioServicio.insertarComentario(this.coment);
            this.coment.contenido = '';
        }
    };
    SysforumVerTemaComponent.prototype.darLike = function (even, comen) {
        this.Vsesion = this.userId;
        console.log(this.Vsesion);
        console.log(comen);
        if (this.Vsesion == comen.idSesion) {
            this.bandera = true;
            console.log('Esta repetido');
        }
        for (var index = 0; index < this.likeRegistrado.length; index++) {
            var element = this.likeRegistrado[index];
            if (this.Vsesion == element.$id_usuario && comen.id == element.$id_comentario) {
                this.bandera = true;
                console.log('Esta repetido');
            }
        }
        if (this.bandera == false) {
            comen.like = comen.like + 1;
            this.likeRegist.$id_comentario = comen.id;
            this.likeRegist.$id_usuario = this.Vsesion;
            this.likeRegisServicio.InsertarRegistroLike(this.likeRegist);
            this.comentarioServicio.updateLike(comen);
        }
    };
    SysforumVerTemaComponent = __decorate([
        Component({
            selector: 'app-sysforum-ver-tema',
            templateUrl: './sysforum-ver-tema.component.html',
            styleUrls: ['./sysforum-ver-tema.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            SysforumListarComentariosService,
            SysforumLikeService])
    ], SysforumVerTemaComponent);
    return SysforumVerTemaComponent;
}());
export { SysforumVerTemaComponent };
//# sourceMappingURL=sysforum-ver-tema.component.js.map