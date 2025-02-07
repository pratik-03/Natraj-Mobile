import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/pages/user/login/user.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard',     title: 'Dashboard',        icon: 'fa fa-university',       class: '' },
    // { path: '/location',      title: 'location',         icon: 'fa fa-map-marker',       class: '' },
    // { path: '/user',          title: 'Shop Owner',       icon: 'fa fa-user-circle-o',    class: '' },

    // { path: '/products',      title: 'products',         icon: 'fa fa-product-hunt',     class: '' },
    // { path: '/company',       title: 'company',          icon: 'fa fa-industry',         class: '' },
    // { path: '/category',      title: 'category',         icon: 'fa fa-list-alt',         class: '' },
    // { path: '/purchase',      title: 'purchase',         icon: 'fa fa-shopping-cart',    class: '' },
    // { path:'/sell-table',     title: 'Sell',             icon: 'fa fa-exchange',         class: ''},

    // { path:'/profit',         title: 'Profit',           icon: 'fa fa-exchange',         class: ''},


];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(public userservice:UserService){}

    ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
