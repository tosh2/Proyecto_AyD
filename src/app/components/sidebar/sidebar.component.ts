import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/CrearTema', title: 'Crear Tema', class:'primermenu' },
    { path: '/ListarTemas', title: 'Listar Temas', class: 'segundomenu' },
    { path: '/ListarMisTemas', title: 'Temas',  class: 'tercermenu' }

    // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  userid: String;
  username: String;
  constructor() { }
  seteovariableid(id: String) {
    if ( id == ' ') {
        this.userid = '0';
        return this.userid;
    } else {
        this.userid = id;
        return this.userid;
    }
  }
  seteovariablenombre(name: String) {
    if ( name == ' ') {
        this.username = 'UsuariodePrueba';
        return this.username;
    } else {
        this.username = name;
        return this.username;
    }
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
    }
}
