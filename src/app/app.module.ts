import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { CoreModule } from './core/core.module';

import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        CoreModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
