import dialogsReducer, { addMessage } from './Dialogs-reducer';

let state = {
    messagesData: [
        {
          id: 1,
          authorName: "Masha",
          message: "I am a normal popover and I can have text and everything?",
        },
        {
          id: 2,
          authorName: "Me",
          message: "I am a normal popover everything at night!",
        },
        {
          id: 3,
          authorName: "Masha",
          message: "I can have text and everything...",
        }
    ],
}

// test('length of messages should be incremented', () => {
//     let action = addMessage('Arturio')

//     let newState = dialogsReducer(state, action);

//     expect(newState.messagesData.length).toBe(4);
// });
  
// test('message should be correct', () => {
//     let action = addMessage('Arturio')

//     let newState = dialogsReducer(state, action);

//     expect(newState.messagesData[3].message).toBe('Arturio');
// });