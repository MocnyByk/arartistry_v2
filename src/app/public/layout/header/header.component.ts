import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuRouteModel, NavbarModel } from './header.models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    navbarConfig: NavbarModel;

    ngOnInit() {}

    constructor() {
        this.navbarConfig = {
            menuRoutes: [
                { route: '/home', displayText: 'Home', isActive: true },
                { route: '/gallery', displayText: 'Gallery', isActive: false }
            ]
        };
    }
}
