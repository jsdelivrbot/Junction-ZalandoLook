import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {ZalandoService} from './zalando-service';
initialize();

@inject(ZalandoService)
export class Home {
  heading = "Welcome to ZalandoLooks";
  token = localStorage.getItem('token');
  recent = [
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  },
  {"id": 1,
  "html":"/item/1",
  "url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"
  }
  ];
  post_images = [];

  constructor(zalandoService){
    this.zalandoService = zalandoService;
  }

  activate() {
    // if(this.token){
      // return this.zalandoService.recent()
      //   .then(res => res.response.data)
      //   .then(recent =>
      //     {
      //       this.recent = recent
      //     });
    // }
  }
}
