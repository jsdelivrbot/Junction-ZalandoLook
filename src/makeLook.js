import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import * as fs from 'fs';
// import * as fs from 'fs!npm';
initialize();

export class LookMaker {

	activate(params, routeConfig) { 
		this.routeConfig = routeConfig;
	}

	attached() {
		var findAllImageFiles = function (folderPath, cb) {
		    fs.readdirSync(folderPath, function (err, files) {
		        if (err) { return cb(err, null); }
		        cb(null, files);
		    });
		}

		this.bindSelectFolderClick(function (folderPath) {
	        findAllImageFiles(folderPath, function (err, files) {
	            console.log(err);
	            console.log(files);
	        });
    	});
	}

	bindSelectFolderClick (cb) {
		var openFolderDialog = function (cb) {
		    var inputField = document.querySelector('#folderSelector');
		    inputField.addEventListener('change', function () {
		        var folderPath = this.value;
		        cb(folderPath);
		    });
		    inputField.click();
		}
		var button = document.querySelector('#select_folder');
		button.addEventListener('click', function () {
		    openFolderDialog(cb);
		});
	}
}
