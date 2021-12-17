import { combineReducers } from "redux";
import repositories from './repositories';
import course from './course';
import counter from './counter';

export default combineReducers({ repositories, course, counter });
