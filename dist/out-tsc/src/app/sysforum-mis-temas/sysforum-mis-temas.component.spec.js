import { async, TestBed, inject } from '@angular/core/testing';
import { SysforumMisTemasComponent } from './sysforum-mis-temas.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioTemaService } from '../sysforum-services/servicio-tema.service';
describe('SysforumMisTemasComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SysforumMisTemasComponent],
            imports: [FormsModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
                AngularFireModule,
            ],
            providers: [AngularFirestore, AngularFireModule,
            ]
        })
            .compileComponents();
    }));
    it('Listado de Temas generado con exito', function () {
        fixture = TestBed.createComponent(SysforumMisTemasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
    it('Verificar Variable de sesion Usuario', function () {
        fixture = TestBed.createComponent(SysforumMisTemasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.usuario != "");
    });
    it('Metodo darLike y su servicio sean llamados', inject([ServicioTemaService], function (service) {
        inject([SysforumMisTemasComponent], function (VerTema) {
            expect(service.getTemasUsuario).arguments(String, '0iuPkBQUSOkpgVKJaxqM');
        });
    }));
});
describe('Listar Temas', function () {
    /*
     //kLSIR8yuTvSR7qCcmoRy
   
     it('deberia retornar un array de 3 posiciones',() =>{
       let arreglo: Tema[];
       let usuarioActual = "kLSIR8yuTvSR7qCcmoRy";
       let afs : AngularFirestore;
       let temaServicio = new ServicioTemaService(afs);
         temaServicio.getTemasUsuario("kLSIR8yuTvSR7qCcmoRy").subscribe(temas =>{
         arreglo = temas;
         });
   
         expect(arreglo.length).toEqual(3);
     });
   
     //0iuPkBQUSOkpgVKJaxqM
   
     it('deberia retornar un array Vacio',() =>{
       let arreglo: Tema[];
       let usuarioActual = "0iuPkBQUSOkpgVKJaxqM";
       var ServicioTema = require('../sysforum-services/servicio-tema.service');
       var fire : AngularFirestore;
       var temaServicio = ServicioTema.ServicioTemaService(fire);
       arreglo = temaServicio.getTemasUsuario("0iuPkBQUSOkpgVKJaxqM");
   
         expect(arreglo.length).toEqual(0);
     });
   
   });
     */
    // it('Metodo de mostrar temas por usuraio',
    //   inject([ServicioTemaService], (service: ServicioTemaService) => {
    //     let usuarioActual = "0iuPkBQUSOkpgVKJaxqM";
    //     expect(service.getTemasUsuario).arguments(String, usuarioActual);
    //   })
    // );
});
//# sourceMappingURL=sysforum-mis-temas.component.spec.js.map