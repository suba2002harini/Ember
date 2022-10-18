import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewMessageInputComponent extends Component {
  @tracked message;
  @tracked name;
  @action
  createMessage(event) {
    event.preventDefault();

    if (this.message && this.args.onCreate && this.name) {
      this.args.onCreate(this.message,this.name);

      // reset the message input
      this.message = '';
      this.name='';
    }
  }
}