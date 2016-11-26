import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {ZalandoService} from './zalando-service';
import {parseArticle} from 'utilities';
initialize();

@inject(ZalandoService)
export class Item {

  constructor(zalandoService){
    this.zalandoService = zalandoService;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    var id = params.id;
    var a1 = this.zalandoService.articleById(id).then(
      article_raw => {
        var article = parseArticle(article_raw);
        this.photo = article.imageUrl;
        this.item = {
          "id":article.id,
          "name":article.name,
          "shopUrl":article.shopUrl
        };
      },
      error => alert("Rejected: " + error)
    );
  }
}
