import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

export class SessionAPI {
    static inject() { return [HttpClient]; }

    constructor(client) {
        this.client = client;
    }

    getSessionsList() {
        return this.client.fetch('sessions.json')
            .then(response => { return response.json(); });
    }
}