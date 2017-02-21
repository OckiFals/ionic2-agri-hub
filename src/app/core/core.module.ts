import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CredentialsService } from './authenticate/credentials.service';
import { LoginPage } from './authenticate/login';
import { LoginService } from './authenticate/login.service';

import { NodeListPage } from '../nodes/list/node-list';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        LoginPage,
        NodeListPage
    ],
    entryComponents: [
        LoginPage,
        NodeListPage
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        Storage,
        CredentialsService,
        LoginService
    ]
})
export class CoreModule {}