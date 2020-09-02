import { createSelector } from "reselect"

const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}
export const getUsersPerPage = (state) => {
    return state.usersPage.usersPerPage
}
export const getCurrenPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getIsFollowLoading = (state) => {
    return state.usersPage.isFollowLoading
}