import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class RentalImagesComponent extends Component {
  @tracked isLarge = false;
  sometext = 'goodmoring';
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
