import {bindable, bindingMode} from 'aurelia-framework';
import moment from 'moment';

export class SessionItem {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) session;

    time(session) {
        return moment(session.Schedule.StartDatetime).format('h:mm a');
    }

    twitterUrl(speaker) {
        return `https://twitter.com/${speaker.Twitterusername}`;
    }

    toggle(session) {
        session.ShowDescription = !session.ShowDescription; 
        return false;
    }
}
