import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class MessagesComponent extends Component {
  @action
  addMessage(messageText, uname) {
    this.messages = [
      ...this.messages,
      {
        username: uname,
        active: true,
        content: `${messageText}`,
      },
    ];
  }

  @tracked messages = [
    {
      username: 'Tomster',
      active: true,
      localTime: '4:56pm',
      content: `
        
          Hey Zoey, have you had a chance to look at the EmberConf
          brainstorming doc I sent you?
        
      `,
    },
    {
      username: 'Zoey',
      active: true,
      content: `
          Hey!
          I love the ideas! I'm really excited about where this year's
          EmberConf is going, I'm sure it's going to be the best one yet.
          Some quick notes:
            Definitely agree that we should double the coffee budget this
            year (it really is impressive how much we go through!)
            A blimp would definitely make the venue very easy to find, but
            I think it might be a bit out of our budget. Maybe we could
            rent some spotlights instead?

            We absolutely will need more hamster wheels, last year's line
            was <em>way</em> too long. Will get on that now before rental
            season hits its peak.
            Let me know when you've nailed down the dates!
      `,
    },
  ];
}
