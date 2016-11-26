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
    return this.http.get('articles').then(data => {
      return JSON.parse(data.response);
    });
  }

  articleById(id) {
    return this.http.get('articles/'+id).then(data => {
      return JSON.parse(data.response);
    });
  }

}
