import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {LooksService} from './looksService';
import {parseArticle} from 'utilities';
initialize();

@inject(LooksService)
export class LooksHome {
  heading = "Welcome to ZalandoLooks";
  looks = [];

  constructor(looksService) {
    this.looksService = looksService;
  }

  activate() {
    this.looks = this.looksService.getLooks();
  }

  attached() {
    var id = function(elemId) {
      return document.getElementsByName(elemId);
    }
    function createfunc(scriptElement) {
        return () => {
            if (scriptElement.style.color=="red") { 
              scriptElement.style.color="#bcb7b7"; 
            } 
            else { 
              scriptElement.style.color="red"; 
            } 
        };
    }
    var scriptElements = id('likeid');
    for (var i = 0; i < scriptElements.length; i++) {
        var scriptElement = scriptElements[i];
        scriptElement.onclick = createfunc(scriptElement);
    }
  }
}
