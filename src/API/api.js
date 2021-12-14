import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY':'e64530de-559d-455d-ab3d-0c9efaf1299e'},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers (usersPerPage, currentPage) {
        return(
            instance.get(`users?count=${usersPerPage}&page=${currentPage}`)
            .then(response => {
                return response.data
    
            })
        )
    },
    followUser (usersId) {
        return(
            instance.post(`follow/${usersId}`)
            .then(response => {
                return response.data
            })
        )
    },
    unfollowUser (usersId) {
        return(
            instance.delete(`follow/${usersId}`)
            .then(response => {
                return response.data
            })
        )
    }
}
export const profileAPI = {
    getUserProfile (userId) {
        return(
            instance.get("profile/" + userId)
        )
    },
    getUserStatus(userId) {
        return(
            instance.get("/profile/status/"+userId)
            .then(response => {
                return response.data
            })
        )
    },
    updateUserStatus(status) {
        return(
            instance.put("/profile/status/", {status})
            .then(response => {
                return response.data
            })
        )
    }
}
export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
            .then((response)=> {
                return response.data
            })
    },
    login (formData) {
        return(
            instance.post("auth/login", formData)
        )
    },
    logout () {
        return(
            instance.post("auth/logout")
        )
    }
}