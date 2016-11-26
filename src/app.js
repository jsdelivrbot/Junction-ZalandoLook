export class App {
  // Implement configureRouter method
  configureRouter(config, router) {
    config.title = 'Look of the Week';
    // Use map to set array of possible routes
    config.map([
      { route: ['','home'], name: 'home', moduleId: './home', nav: true, title:'Home' },
      { route: 'looksHome', name: 'looksHome',  moduleId: './looksHome', nav: true, title:'Looks'},
      { route: 'look/:lookId', name: 'look',  moduleId: './look', nav: false, title:'Look'},
      { route: 'item/:id', name: 'item',  moduleId: './item', nav: true, title:'Item', href:'#/item/1' }
    ]);

    // Create a binding to the router object
    this.router = router;
  }
}
