import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
// const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class RentalRoute extends Route {
  //   async model(params) {
  //     let response = await fetch(`/api/rentals/${params.rental_id}.json`);
  //     let { data } = await response.json();
  //     let { id, attributes } = data;
  //     let type;
  @service store;
  // if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //   type = 'Community';
  // } else {
  //   type = 'Standalone';
  // }
  // console.log(attributes);
  // return { id, type, ...attributes };
  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
