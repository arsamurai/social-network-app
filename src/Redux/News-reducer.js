import { newsAPI } from "../api/api";
const SET_NEWS = 'SET_NEWS';
const SEARCH_NEWS = 'SEARCH_NEWS';

let initializationState = {
    news: null
}

const newsReducer = (state = initializationState, action) => {
    switch(action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: action.news
            }
        }
        default:
             return state;
    }
}

const setNews = (news) => ({type: SET_NEWS, news});

export const getNews = () => {
    return async(dispatch) => {
        let response = await newsAPI.getNews();
        dispatch(setNews(response.data.articles));
    }
}

export const searchNews = (type) => {
    return async(dispatch) => {
        let response = await newsAPI.searchNews(type);
        dispatch(setNews(response.data.articles));
    }
}

export default newsReducer;