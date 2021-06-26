import { createStore, combineReducers, applyMiddleware } from 'redux'
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from './Users-reducer';
import authReducer from './Auth-reducer';
import appReducer from './App-reducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import newsReducer from './News-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;