import {inject} from 'aurelia-framework';
import {ZalandoService} from './zalando-service';
import {parseArticle} from 'utilities';



@inject(ZalandoService)
export class LooksService {
  constructor(zalandoService) {
    this.zalandoService = zalandoService;
    this.looks = {};
    this.initialized = false;
  }

  init() {
    var type = "item";
    var look1Item0 = this.parseArticlePromise(this.zalandoService.articleById("f1451b000-c11"), type);
    var look1Item1 = this.parseArticlePromise(this.zalandoService.articleById("on321g0dm-n11"), type);
    var look1Item2 = this.parseArticlePromise(this.zalandoService.articleById("gp021i03f-b11"), type);
    var look1Item3 = this.parseArticlePromise(this.zalandoService.articleById("k0051e00p-o11"), type);
    var look1Item4 = this.parseArticlePromise(this.zalandoService.articleById("gp021i03f-b11"), type);
    var look1 = {
      "id":0,
      "html": "#/look/0",
      "name": "Best look ever",
      "imageUrl":"https://cs7050.vk.me/c604428/v604428952/341d3/Qh_ul8SiIfY.jpg",
      "items":[look1Item0, look1Item1, look1Item2, look1Item3, look1Item4]
    };
    var look2Item0 = this.parseArticlePromise(this.zalandoService.articleById("ev451ba0t-q11"), type);
    var look2Item1 = this.parseArticlePromise(this.zalandoService.articleById("ev421ia34-c11"), type);
    var look2Item2 = this.parseArticlePromise(this.zalandoService.articleById("ev451ha49-q11"), type);
    var look2 = {
      "id":1,
      "html": "#/look/1",
      "name": "Best look ever 2",
      "imageUrl":"https://pp.vk.me/c836637/v836637493/145d3/3gcHH2krBzA.jpg",
      "items": [look2Item0, look2Item1, look2Item2]
    };
    
    this.addLook(look1);
    this.addLook(look2);
    this.initialized = true;
  }

  getLooks() {
    if (!this.initialized) {
        this.init();
    }
    return Object.keys(this.looks).map(key => {
        return this.looks[key];
    });
  }

  getLookById(id) {
    if (!this.initialized) {
        this.init();
    }
    return this.looks[id];
  }

  addLook(look) {
    this.looks[look.id] = look;
  }

  parseArticlePromise(promise, type) {
    var temp = [];
    promise.then(article => {
              temp.push(parseArticle(article, type));
          },
          error => alert("Rejected: " + error)
    );
    alert(temp.length);
  }
}
