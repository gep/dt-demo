import { ofType, combineEpics } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

import { messageActionTypes } from '../actions/types';

const messageReceive = action$ =>
    action$.pipe(
        ofType(messageActionTypes.MESSAGE_RECEIVE),
        mergeMap(() => EMPTY)
    );

export default combineEpics(messageReceive);
