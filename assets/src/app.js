import ng from 'angular';
import ngUiRouter from 'angular-ui-router';
import MainRoute from './config/main.route';
import HomeComponent from './components/home/home.component.js';
import DefaultComponent from './components/default/default.component.js';

let testModule =  ng.module('test', [ngUiRouter])
    .config(MainRoute)
    .component('defaultPage', DefaultComponent)
    .component('homePage', HomeComponent)
;

export default testModule;