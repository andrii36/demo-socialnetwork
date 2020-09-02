import { connect } from 'react-redux';
import { setCurrentPage, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from '../../State/usersPageReducer';
import UsersAPIContainer from './UsersAPIContainer.js';
import { getUsers, getTotalUsers, getUsersPerPage, getCurrenPage, getIsLoading, getIsFollowLoading } from '../../State/usersSelector';

let mapStateToProps  = (state) => {
    return{
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        usersPerPage: getUsersPerPage(state),
        currentPage: getCurrenPage(state),
        isLoading: getIsLoading(state),
        isFollowLoading: getIsFollowLoading(state)
    }
}

export default connect (mapStateToProps, 
    {setCurrentPage, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator})(UsersAPIContainer);