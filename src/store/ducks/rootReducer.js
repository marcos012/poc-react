import { combineReducers } from "redux";
import repositories from './repositories';
import course from './course';

export default combineReducers({ repositories, course });