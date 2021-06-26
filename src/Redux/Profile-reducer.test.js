import profileReducer, { addPost, deletePost } from './Profile-reducer';

let state = {
    postData: [
        { id: 1, ava: null, message: "Hey, why nobody love me?", likeCount: 12 },
        { id: 2, ava: null, message: "It's our new program! Hey!", likeCount: 27 },
        { id: 3, ava: null, message: "Hello, how`s going?", likeCount: 33 }
    ],
}

// test('length of posts should be incremented', () => {
//     let action = addPost('Artur')

//     let newState = profileReducer(state, action);

//     expect(newState.postData.length).toBe(4);
// });
  
// test('message should be correct', () => {
//     let action = addPost('Artur')

//     let newState = profileReducer(state, action);

//     expect(newState.postData[3].message).toBe('Artur');
// });

// test('after deleting length of messages should be decrement', () => {
//     let action = deletePost(1)

//     let newState = profileReducer(state, action);

//     expect(newState.postData.length).toBe(2);
// });

// test('after deleting length of messages shouldn`t be decrement, if id isn`t correct', () => {
//     let action = deletePost(1000)

//     let newState = profileReducer(state, action);

//     expect(newState.postData.length).toBe(3);
// });