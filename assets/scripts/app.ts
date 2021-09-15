'use strict';
// style
import '../styles/app.scss';

import picturefill from 'picturefill';
picturefill();

class App {
	constructor() {
		window.addEventListener('DOMContentLoaded', () => {
			this.init();
		});
	}
	init(): void {
		console.log('test');
	}
}

new App();
