import { Component, OnInit } from '@angular/core';

import { CredentialsService } from '../../core/authenticate/credentials.service';

@Component({
    selector: 'page-node-list',
    templateUrl: 'node-list.html'
})
export class NodeListPage implements OnInit {
    constructor(
        private storage: CredentialsService
    ) { }

    ngOnInit() {
        console.log(
            this.storage.getUser()
                .then(val => console.log(val.username))
        );
    }
}
