import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SidebarComponent extends Component {
  @tracked showingHelp = false;

  @action
  showHelp() {
    this.showingHelp = true;
  }

  @action
  hideHelp() {
    this.showingHelp = false;
  }
}