import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {ZalandoService} from './zalando-service';
initialize();

// @inject(ZalandoService)
export class Item {
  heading = "";
  shopUrl="";
  photo = "images/img.jpeg"

  constructor(){
    // this.zalandoService = zalandoService;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    this.item = {"id":params.id};
    // return this.zalandoService.articles()
    //   .then(res => res.content)
    //   .then(me =>
    //     {
    //       this.item = item
    //       this.heading=item.name
    //       this.shopUrl=item.shopUrl
    //     });
  }
}
