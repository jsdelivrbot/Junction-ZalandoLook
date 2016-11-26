export class App {
  // Implement configureRouter method
  configureRouter(config, router) {
    config.title = 'Look of the Week';
    // Use map to set array of possible routes
    config.map([
      { route: ['','home'], name: 'home', moduleId: './home', nav: true, title:'Home' },
      { route: 'item/:id', name: 'item',  moduleId: './item', nav: true, title:'Item', href:'item/1' },
      { route: 'test/:id', name: 'test',  moduleId: './test', nav: true, title:'Test', href:'test/1'}
    ]);

    // Create a binding to the router object
    this.router = router;
  }
}
