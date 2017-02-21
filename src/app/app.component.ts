import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import {  NodeListPage } from './nodes/list/node-list';
import { ListPage } from './nodes/item-list/list';
import { LoginPage } from './core/authenticate/login';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // make HelloIonicPage the root (or first) page
    rootPage: any = LoginPage;
    pages: Array<{ title: string, component: any }>;

    constructor(
        public platform: Platform,
        public menu: MenuController
    ) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Node List', component: NodeListPage },
            { title: 'My First List', component: ListPage },
            { title: 'Logout', component: LoginPage }
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    }
}
