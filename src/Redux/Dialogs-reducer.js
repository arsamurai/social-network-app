import user_ava from "../Images/me.jpeg";
import user_photo from "../Images/friend.jpg";

const ADD_MESSAGE = 'ADD-MESSAGE';

let initializationState = {
    dialogsData: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Elena" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Sergo" }
      ],
    messagesData: [
        {
          id: 1,
          photo: user_photo,
          authorName: "Masha",
          message: "I am a normal popover and I can have text and everything?",
        },
        {
          id: 2,
          photo: user_ava,
          authorName: "Me",
          message: "I am a normal popover everything at night!",
        },
        {
          id: 3,
          photo: user_photo,
          authorName: "Masha",
          message: "I can have text and everything...",
        }
    ],
}

const dialogsReducer = (state = initializationState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            if(action.newMessageText) {
                let newMessage = {
                    id: 5,
                    photo: user_ava,
                    authorName: "Me",
                    message: action.newMessageText
                }
                return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage]
                };
            }
        default: 
            return state;
    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;