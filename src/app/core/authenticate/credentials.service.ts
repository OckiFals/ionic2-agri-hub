import { Injectable } from '@angular/core';
import {  } from '@angular/http'
import { Storage } from '@ionic/storage';

@Injectable()
export class CredentialsService {
    user: any;
    token: string;

    constructor(
        private storage: Storage
    ) {}

    setUser(user: Object): void {
        this.storage.set('user', user);
    }

    setToken(token: any): void {
        this.storage.set('token', token);
    }

    getUser(): Promise<any> {
        return this.storage.get('user');
    }

    getToken(): Promise<any> {
        return this.storage.get('token');
    }

    deleteAll(): void {
        this.storage.clear();
    }
}