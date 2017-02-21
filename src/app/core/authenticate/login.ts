import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CredentialsService } from './credentials.service';

import { NodeListPage } from '../../nodes/list/node-list';

import { LoginService } from './login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginPage {
    username: string = 'ockifals';
    password: string = 'admin123';
    
    constructor(
        private navCtrl: NavController,
        private storage: CredentialsService,
        private loginService: LoginService
    ) {}

    submit(): void {
        this.loginService.login(this.username, this.password)
            .then(res => this.setAndRedirect(res))
            .catch(error => console.log(error));
    }

    setAndRedirect(response: any): void {
        this.storage.setUser(response.user);
        this.storage.setToken(response.token);
        this.navCtrl.setRoot(NodeListPage);
    }
}