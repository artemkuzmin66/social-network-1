import React from 'react';
import { connect } from 'react-redux';
import {
   follow,
   unfollow,
   setCurrentPage,
   toggleIsFetching,
   requestUsers,
   onPageChanged
} from '../../Redux/Users-reducer';
import {
   getUsers,
   getPageSize,
   getTotalUsersCount,
   getCurrentPage,
   getIsFetching,
   getIsFollowing
} from '../../Redux/users-selectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersClass extends React.Component {
   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.onPageChanged(pageNumber, this.props.pageSize);

   }





   render() {

      return <>
         { this.props.isFetching ? <Preloader /> : null}
         < Users pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleIsFollowing={this.props.toggleIsFollowing}
            isFollowing={this.props.isFollowing}
         />
      </>

   }
}



let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      isFollowing: getIsFollowing(state)

   }

}


export default connect(mapStateToProps,
   { follow, unfollow, setCurrentPage, toggleIsFetching, requestUsers, onPageChanged })
   (UsersClass);

