import {FETCH_POSTS} from '../actions';
import _ from 'lodash';

export default function (state = {}, action,json) {
    switch (action.type) {
        case FETCH_POSTS:
           // console.log(action.payload.data); //[post1,post2]
        //{4: post}
            return _.mapKeys(action.payload.data,"id");
            //return action.payload.data;

        default:
            return state;
    }

}