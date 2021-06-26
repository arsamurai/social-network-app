import user_photo from "../Images/friend.jpg";
import user_ava from "../Images/me.jpeg";
import user_background from "../Images/background.jpg";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let store = {
  _state: {
      profilePage: {
          
      },
      dialogsPage: {
          
      },
      sideBar: [

      ]
  },

  _callSubscriber() {
    console.log('State changed!');
  },

  getState() {
    return this._state;
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }
}

export default store;