import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {ZalandoService} from './zalando-service';
import {parseArticle} from 'utilities';
initialize();

@inject(ZalandoService)
export class Home {
  heading = "Welcome to ZalandoLooks";
  recent = [];

  constructor(zalandoService) {
    this.zalandoService = zalandoService;
  }

  activate() {
    this.zalandoService.articles()
      .then(res => res.content)
      .then(articles => {
              for (var i = 0; i < Object.keys(articles).length; i++) {
                  var article = articles[i];
                  this.recent.push(parseArticle(article, "item"));
              }
            },
            error => alert("Rejected: " + error)
      );
  }
}
