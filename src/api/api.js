import * as axios from 'axios';

let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "7f99b608-cf31-4926-9bbe-42c9e8ea7e89",
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {
  getUsers:(currentPage = 1, pageSize = 10) => {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        return response.data
      });
  },

  unfollow:(userId) => {
    return instance.delete(
      `follow/${userId}`
    )
    .then((response) => {
      return response.data
    });
  },

  follow:(userId) => {
    return instance.post(
      `follow/${userId}`
    )
    .then((response) => {
      return response.data
    });
  }
}

export const profileAPI = {
  getUserProfile: (userId) => {
    return instance
      .get(`profile/` + userId)
      .then((response) => {
        return response.data
      })
  },

  getStatus: (userId) => {
    return instance
    .get(`profile/status/` + userId)
    .then((response) => {
      return response.data
    })
  },

  updateStatus: (status) => {
    return instance
    .put(`profile/status`, {status})
  },

  savePhoto: (photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
    .put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  saveProfile: (profile) => {
    return instance
    .put(`profile`, {profile})
  },
}

export const authAPI = {
  me: () => {
    return instance.get(`auth/me`)
    .then((response) => {
      return response.data
    });
  },

  login: (email, password, rememberMe = false, captcha = null) => {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    .then((response) => {
      return response.data
    });
  },

  logout: () => {
    return instance.delete(`auth/login`)
    .then((response) => {
      return response.data
    });
  }
}

export const securityAPI = {
  getCaptchaUrl: () => {
    return instance.get(`security/get-captcha-url`)
  }
}

export const newsAPI = {
  getNews: () => {
    return axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-03-26&sortBy=publishedAt&apiKey=7db5783412bf4990b2e099b8e408ddf8`)
  },
  searchNews: (type) => {
    return axios.get(`https://newsapi.org/v2/everything?q=${type}&from=2021-03-26&sortBy=publishedAt&apiKey=7db5783412bf4990b2e099b8e408ddf8`)
  }
}