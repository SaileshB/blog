import {FETCH_POSTS} from '../actions';
import {FETCH_POST} from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            /* used in ES5
             const post = action.payload.data;
             const newState = {...state};
             newState[post.id] =post;
             return newState;
             */

            //ES6 code using key interpolation
            return {...state,[action.payload.data.id]:action.payload.data};

        case FETCH_POSTS:
            // console.log(action.payload.data); //[post1,post2]
            //{4: post}
            return _.mapKeys(action.payload.data, "id");
        //return action.payload.data;

        default:
            return state;
    }

}