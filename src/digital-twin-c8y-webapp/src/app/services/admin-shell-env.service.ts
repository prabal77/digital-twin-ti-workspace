import { Injectable } from '@angular/core';
import { FetchClient } from '@c8y/ngx-components/api';

@Injectable({
  providedIn: 'root'
})
export class AdminShellEnvService {
  private readonly baseURL = '/service/twin/';

  constructor(private fetchClient: FetchClient) {
  }

  async getData() {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await this.fetchClient.fetch(this.baseURL + 'aasenv', options);
  }

}
