import EmberRouter from '@ember/routing/router';
import config from 'sales/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('contact');
  this.route('about');
  this.route('rental', { path: '/rentals/:rental_id' });
});
