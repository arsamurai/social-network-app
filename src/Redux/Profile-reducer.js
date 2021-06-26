import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initializationState = {
    profile: null,
        // background: user_background,
        // ava: user_ava,
        // name: "Artur Musienko",
        // birthday: "2 Juny",
        // city: "Odessa",
        // education: "BSU 11",
        // website: "http://omega.com"
    postData: [
        { id: 1, ava: null, message: "Hey, why nobody love me?", likeCount: 12 },
        { id: 2, ava: null, message: "It's our new program! Hey!", likeCount: 27 },
        { id: 3, ava: null, message: "Hello, how`s going?", likeCount: 33 }
    ],
    status: ''
}

const profileReducer = (state = initializationState, action) => {
    switch(action.type) {
        case ADD_POST: {
            if(action.newPostText) {
                let newPost = {
                    id: 4,
                    ava: null,
                    message: action.newPostText,
                    likeCount: 0
                }
                return {
                    ...state,
                    postData: [...state.postData, newPost],
                };
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter(post => post.id != action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
             return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => {
    return async (dispatch) => {
      let data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async(dispatch) => {
        let data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    }
}

export const updateStatus = (status) => {
    return async(dispatch) => {
        let data = await profileAPI.updateStatus(status);
          if(data.resultCode === 0) {
            dispatch(setStatus(status));
          }
    }
}

export const savePhoto = (file) => {
    return async(dispatch) => {
        let response = await profileAPI.savePhoto(file);
          if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
          }
    }
}

export const saveProfile = (profile) => {
    return async(dispatch, getState) => {
        const userId = getState().auth.userId;   
        let response = await profileAPI.saveProfile(profile);
          if(response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
          } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
          }
    }
}

export default profileReducer;