import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {LooksService} from './looksService';
import {parseArticle} from 'utilities';
initialize();

@inject(LooksService)
export class Look {

  constructor(looksService) {
    this.looksService = looksService;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    var look = this.looksService.getLookById(params.lookId);

    this.items = look.items;
    this.photo = look.imageUrl;
    this.look = look;
  }
}
