import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {IgService} from './zalando-service';
initialize();

@inject(ZalandoService)
export class Item {
  heading = "";
  shopUrl=""; 
  id="";
  item = {};
  photo = "images/img.jpeg"

  constructor(zalandoService){
    this.zalandoService = zalandoService;
  }

  activate(params, routeConfig) {
    this.id = params.id;
    return this.zalandoService.articles()
      .then(res => res.content)
      .then(me =>
        {
          this.item = item
          this.heading=item.name
          this.shopUrl=item.shopUrl
        });
  }
}
