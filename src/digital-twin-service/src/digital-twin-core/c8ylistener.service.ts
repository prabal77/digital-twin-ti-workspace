import { Injectable } from '@nestjs/common';
import { Client, BasicAuth, FetchClient } from '@c8y/client';
import { Observable } from 'rxjs';

@Injectable()
export class C8ylistenerService {
    private fetchClient: FetchClient;
    private subClient: Client;
    constructor() {
        const baseUrl = process.env.C8Y_BASEURL;
        const {
            C8Y_BOOTSTRAP_TENANT: tenant,
            C8Y_BOOTSTRAP_USER: user,
            C8Y_BOOTSTRAP_PASSWORD: password
        } = process.env;
        console.log('##### baseurl', baseUrl);
        console.log('##### tenant', tenant);
        console.log('##### user', user);
        console.log('##### password', password);
        const auth = new BasicAuth({ tenant, user, password });
        this.fetchClient = new FetchClient(auth, baseUrl);
        Client.authenticate({ tenant, user, password }, baseUrl).then(x => {
            this.subClient = x;
            console.log('auth complete2');
            this.subscribeAlarms().subscribe(x => {
                console.log('##### received alarm', x);
            });
        }).catch(e => {
            console.error('failed to authenticate client', e);
        });

        (new Client(auth, baseUrl)).realtime.subscribe('/alarms/*', val => {
            console.log('###### found alarm', val);
        });
    }

    public subscribeAlarms(): Observable<any> {
        return new Observable<any>((observer) => {
            const subscription = this.subClient.realtime.subscribe('/alarms/*', (msg) => {
                console.log('message', msg);
                const data = {
                    channel: msg.channel,
                    data: msg.data.data,
                    id: msg.id,
                    realtimeAction: msg.data.realtimeAction,
                };
                return observer.next(data);
            });
            return () => this.subClient.realtime.unsubscribe(subscription);
        });
    }
}
