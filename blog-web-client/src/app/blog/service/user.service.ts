import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class UserService {

    username: string = null;
    password: string = null;

    constructor() { }

    isUserLoggedIn(): boolean {
        if (this.username) {
            return true;
        }

        return false;
    }

    getUsername(): string {
        return this.username;
    }

    logoutUser() {
        this.username = null;
        this.password = null;
    }

    logginUser(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}