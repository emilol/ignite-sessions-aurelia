import {inject} from 'aurelia-framework';
import moment from 'moment';

import {SessionAPI} from '../../sessions/session-api'

export class SessionList {
    static inject() { return [SessionAPI]; }

    constructor(sessionApi){
        sessionApi.getSessionsList()
            .then(data => { 
                this.sessions = this.groupByDay(data.Sessions);
                console.log(this.sessions);
            });
    }

    groupByDay(sessions) {
        return sessions.reduce(
            (accumulator, session) => { 
                let day = moment(session.Schedule.StartDatetime).format('dddd');                    
                return accumulator.set(day, (accumulator.get(day) || []).concat(session));
            }, new Map());
    } 

    showDay(day) {
        let isToday = day === moment().format('dddd');
        let isTomorrow = day === moment().add(1, 'day').format('dddd');
        let lastSessionIsOver = this.isOver(this.sessions.get(day).slice(-1)[0]);

        return isToday ? !lastSessionIsOver : isTomorrow;
    }

    isOver(session) {
        return moment(session.Schedule.EndDatetime).isSameOrBefore(moment(), 'minute');
    }
}

