import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ZalandoService {
  constructor(http) {
    http.configure(config => {
      config
        .withBaseUrl('https://api.zalando.com/');
    });

    this.http = http;
  }

  articles() {
    return this.http.jsonp(`articles`, 'callback');
  }

}
